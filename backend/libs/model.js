'use strict'

const fs = require('fs'),
      path = require('path');

const modelPath = path.join(__dirname, '../models'),
      modelFiles = fs.readdirSync(modelPath);

const db = require('./db');

modelFiles.forEach((filename) => {
  if (filename.endsWith('.js')) {
    let moduleName = filename.substring(0, filename.length - 3);
    module.exports[moduleName] = 
      require(path.join(modelPath, filename))(db.sequelize, db.Sequelize);
  }
});

module.exports.db = db;
