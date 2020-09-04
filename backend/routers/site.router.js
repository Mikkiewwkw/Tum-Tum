'use strict'

const bcrypt = require('bcrypt');

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
        if (username == undefined || username == '' ||
            password == undefined || password == '') {
          let error = new Error('Invalid Input');
          error.name = 'InvalidInputError';
          throw error;
        }

        let user = await User.findOne({
          where: {
            username: username,
          }
        });
	let cmp_result = await bcrypt.compare(
          password,
	  user.password
	);
	if (cmp_result) {
	  ctx.body.data = {
            "status": "success",
            "token": "xxxxx"
	  };
	} else {
          throw new Error("Invalid user credentials.");
	}
      } catch (error) {
	//console.log(error);
        ctx.body.data = {
          "status": "failed",
	  "message": "Invalid username or password"
	};
      }
    } else {

    }
  });

module.exports = router;

