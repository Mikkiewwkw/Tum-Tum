'use strict'

const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV,
      config = require('../configs');
 
const dbConfig = 
  env == "test" || env == "production" ? 
  config.database[env]:
  config.database['development'];

module.exports = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(dbConfig)
};
