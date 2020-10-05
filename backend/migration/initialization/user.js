'use strict'

const bcrypt = require('bcrypt');

module.exports = (async (model, config) => {
  try {
    let Buddy = model.Buddy;
    let buddy = await Buddy.findOne();

    let User = model.User;
    let salt = await bcrypt.genSalt(10),
	pwd = await bcrypt.hash('testpassword', salt + config.site.hashSalt);
    let first_user = User.build({
      firstname: 'Test',
      lastname: 'User',
      username: 'testuser',
      email: 'testuser@tumtum.com',
      phone: '16542309181',
      password: pwd,
    });  
    first_user.setBuddy(buddy, { save: false });
    await first_user.save();
  } catch (err) {
    throw err;
  }
});
