'use strict'

const bcrypt = require('bcrypt'),
      jwt = require('jsonwebtoken'),
      Sequelize = require('sequelize'),
      Op = Sequelize.Op,
      configs = require('../configs');

const User = require('../libs/model').User;

const Router = require('koa-router');
let router = new Router();

router.use('/', async (ctx, next) => {
  await next();
});

router.
  post('/signin', async (ctx, next) => {
    let data = ctx.request.body;

    if (data) {
      let username = data.username,
          password = data.password;
      
      try {
        // TODO: probably add email/phone check before retrieval
        if ((password == undefined || password == '') || 
            (username == undefined || username == '')) {
          let error = new Error('Invalid Input');
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
  });

module.exports = router;

