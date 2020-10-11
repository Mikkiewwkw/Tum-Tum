'use strict'

const bcrypt = require('bcrypt'),
      jwt = require('jsonwebtoken'),
      moment = require('moment'),
      axios = require('axios'),
      Sequelize = require('sequelize'),
      Op = Sequelize.Op,
      cacheStore = require('../libs/cache').store,
      configs = require('../configs'),
      emailService = require('../libs/email'),
      SMSService = require('../libs/sms');

const User = require('../libs/model').User;

const Router = require('koa-router');
let router = new Router();

router.use('/', async (ctx, next) => {
  await next();
});

router
  .post('/signin', async (ctx, next) => {
    let data = ctx.request.body;

    if (data) {
      let username = data.username,
          password = data.password;
      
      try {
        // TODO: probably add email/phone check before retrieval
        if ((password == undefined || password == '') || 
            (username == undefined || username == '')) {
          let error = new Error('Invalid inputs.');
          error.name = 'InvalidInputError';
          throw error;
        }
        
        //console.log(data);
        let whereStat = {
          [Op.or]: [
	    { username: username },
            { email: username },
            { phone: username }
          ],
        };
        
        let user = await User.findOne({ where: whereStat }),
            userFound = false;
        if (user) {
          let cmp_result = await bcrypt.compare(
            password,
            user.password
          );
          if (cmp_result) {
            let user_info = {
              "name": user.username,
	      "id": user.id
	    };
	    let token = await jwt.sign(
	      user_info, 
	      configs.site.tokenKey, 
	      { expiresIn: '5d' }
	    );
	    let refresh_token = await jwt.sign(
	      user_info, 
	      configs.site.tokenKey, 
	      { expiresIn: '60d' }
	    );

            ctx.body.data = {
              "status": "success",
              "token": token,
              "refresh_token": refresh_token
            };
            userFound = true;
          }
        } 
        if (!userFound) {
          let err = new Error("Invalid user credentials");
          err.name = "InvalidUserCredentialError";
          throw err;
        }
      } catch (error) {
	// TODO: handle errors by error types
	//console.log(error);
        ctx.body.data = {
          "status": "failed",
	  "message": "Invalid username or password."
	};
      }
    } else {
      ctx.body.data = {
        "status": "failed",
        "message": "Invalid inputs."
      }
    }
  })
  .post('/socialLogin', async (ctx, next) => {
    // Social login
    // Requires parameter to specify which social network is being used
  })
  .post('/refreshToken', async (ctx, next) => {
    // Auth check refresh token
    // Decode refresh token and send new token back to client 
  })
  .post('/signupPre', async (ctx, next) => {
    // Receive signup request and generate validation code
    let data = ctx.request.body,
        query = ctx.request.query;

    try {
      let err = new Error(),
          errInvalidInput = err;
   
      errInvalidInput.message = 'Invalid inputs.';
      errInvalidInput.name = 'InvalidInputError';

      // Redis data format: key -> value
      // operation:'email'/'phone'/'username':content -> 
      // [ token/validation code, createdAt, expiredAt ]
      if (data && data.sendto) {
        let sendto = data.sendto,
            mode = undefined;

        let countAtSym = 0, validPhoneNum = true;
        if (sendto && typeof sendto == 'string') {
          for (let i = 0;i < sendto.length; ++i) {
            let ch = sendto[i];
            if (ch == '@') countAtSym++; 
            if (validPhoneNum && !((ch == '+') || (ch >= '0' && ch <= '9'))) 
              validPhoneNum = false;
            if (countAtSym >= 2) break;
	  }
     
          if (countAtSym == 1) {
            mode = 'email';
          } else if (countAtSym == 0 && validPhoneNum) {
            mode = 'phone';
            sendto = parseInt(sendto);
          }
	} 

        let key = '', llen = 0, user = undefined;
        if (mode == 'email' && sendto && true) {
          key = `signup:email:${sendto}`;
          user = await User.findOne({ where: { email: sendto } }); 
	} else if (mode == 'phone' && sendto && true) {
          key = `signup:phone:${sendto}`;
          user = await User.findOne({ where: { phone: sendto } }); 
	} else {
          throw errInvalidInput;
	}

        if (user) {
          let userInfoDuplicateError = err;
          userInfoDuplicateError.name = 'UserInfoDuplicateError';
          userInfoDuplicateError.message = 
            `${mode[0].toUpperCase()}${mode.slice(1)} has been used.`;
          throw userInfoDuplicateError;
        }
        return;

        let validationCode = Math.floor(1000 + Math.random() * 9000),
            createdAt = moment().unix(),
            expiredAt = createdAt + parseInt(configs.site.signupExpireIn);

        // Update redis
        let errCache = err;
        errCache.message = 'Failed to operate the cache server.';
        errCache.name = 'CacheOperationFailedError';

	llen = await cacheStore.client.llen(key);
	if (llen == 3) {
          let prevSentAt = await cacheStore.client.lindex(key, 1);
	  prevSentAt = parseInt(prevSentAt);
	  if (prevSentAt + parseInt(configs.site.signupResend) > createdAt) {
	  //if (prevSentAt + 1 > createdAt) { // Only for test !!!!
            let sendTooFastError = new Error('You are requesting validation code too fast!'); 
	    sendTooFastError.name = 'OperationTooFastError';
            throw sendTooFastError;
	  } else {
            let res = await cacheStore.client.lset(key, 0, validationCode);
	    if (res == 'OK') {
              res = await cacheStore.client.lset(key, 1, createdAt); 
              if (res == 'OK') {
                res = await cacheStore.client.lset(key, 2, expiredAt);
	      }
	    }
            
            if (res != 'OK') {
              throw errCache;
	    }
	  }
	} else {
          let res = await cacheStore.client.rpush(key, [validationCode, createdAt, expiredAt]);  
          if (res < 3) { 
            throw errCache;
	  }
	}

        let sendMsg = `Welcome to TumTum! Your validation code is ${validationCode}. This code will be expired in ${Math.floor(parseInt(configs.site.signupExpireIn) / 60)} minutes.`;
	// Send code
        if (mode == 'email') {
          let res = await emailService.sendEmail({
            //"from": "welcome@tumtum.dev",
            "from": "tumtum-welcome@nyanpasu.me",
            "to": [ sendto ],
            "subject": "Please use the attached validation code to finish your registration",
            "content": sendMsg
	  });
	} else if (mode == 'phone') {
          let res = await SMSService.sendSMS({
            "to": sendto,
            "content": sendMsg
	  });
         //console.log(res);
	}

        // TODO: probably return a operation token
        ctx.body.data = {
          "status": "success"
        };
      } else {
        throw errInvalidInput;
      }
    } catch (error) {
      if (error.name == 'OperationTooFastError') {
        ctx.body.data = {
          "status": "failed",
          "message": error.message
        };
      } else if (error.name == 'UserInfoDuplicateError') {
        ctx.body.data = {
          "status": "failed",
          "message": error.message
        };
      } else {
        console.log(error);
        ctx.body.data = {
          "status": "failed",
          "message": error.message
        }
      }
    }
  })
  .post('/signup', async (ctx, next) => {
    // Auth check operation token
    // Check if the code is equal to the code embedded in the operation token 

    try {
      let data = ctx.request.body;

      // Validate data

      let User = model.User;
      let salt = await bcrypt.genSalt(10),
          pwd = await bcrypt.hash(post_pwd, slat + configs.site.hashSalt);
      let new_user = User.build({
        firstname: post_firstname,
        lastname: post_lastname,
        username: post_username,
        email: post_email,
        phone: post_phone,
        password: post_pwd,
      });  
    first_user.setBuddy(buddy, { save: false });
    } catch (err) {
      throw err;
    }
  });

module.exports = router;
