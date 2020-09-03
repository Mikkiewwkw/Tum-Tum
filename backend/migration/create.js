'use strict'

const model = require('../libs/model'),
      password = require('../libs/password'),
      config = require('../configs');

const bcrypt = require('bcrypt');

(async () => {
  try {
    await model.db.sequelize.authenticate();
    model.db.sequelize.sync();
  
    let User = model.User;
    let salt = await bcrypt.genSalt(10),
	pwd = await bcrypt.hash('testpassword', salt + config.site.hashSalt);
    let first_user = User.build({
      username: 'testuser',
      salt: salt,
      pwd: pwd,
    });  
    await first_user.save();
  } catch (err) {
    console.log(err);
  }
})();
