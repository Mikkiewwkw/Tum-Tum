'use strict'

const redisStore = require('koa-redis');

const env = process.env.NODE_ENV,
      config = require('../configs');

const cacheConfig = 
  env == "test" || env == "production" ? 
  config.cache[env]:
  config.cache['development'];

const redisUrl = 
  `redis://${cacheConfig.username}:${cacheConfig.password}@${cacheConfig.host}:${cacheConfig.port}/${cacheConfig.database}`;

module.exports = {
  store: redisStore({ url: redisUrl })
};
