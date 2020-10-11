'use strict'

const database = require('./database.config'),
      site = require('./site.config'),
      cache = require('./cache.config'),
      service = require('./service.config');

module.exports.database = database;
module.exports.site = site;
module.exports.cache = cache;
module.exports.service = service;
