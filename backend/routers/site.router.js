'use strict'

const bcrypt = require('bcrypt'),
      Sequelize = require('sequelize'),
      Op = Sequelize.Op;

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
            ctx.body.data = {
              "status": "success",
              "token": "xxxxx"
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

