'use strict'

const fs = require('fs'),
      path = require('path');

const modelPath = path.join(__dirname, '../models'),
      modelFiles = fs.readdirSync(modelPath);

const modelRelations = require('../models/relations');

const db = require('./db');

modelFiles.forEach((filename) => {
  if (filename.endsWith('.model.js')) {
    let moduleName = filename.substring(0, filename.length - 9);
    module.exports[moduleName] = 
      require(path.join(modelPath, filename))(db.sequelize, db.Sequelize);
  }
});

modelRelations(module.exports);

module.exports.db = db;
