'use strict'

const model = require('../libs/model'),
      config = require('../configs');

const init = require('./initialization');

(async () => {
  try {
    await model.db.sequelize.authenticate();
    model.db.sequelize.sync();
  
    await init.buddy(model);
    await init.user(model, config);
  } catch (err) {
    console.log(err);
  }
})();
