'use strict'

const cache = {
  development: {
    host: 'redis-18713.c74.us-east-1-4.ec2.cloud.redislabs.com',
    port: 18713,
    username: 'rediscloud',
    password: 'uDIfFRFnBT1T6mFiKYwifeCM0HWsNlKI',
    database: '',
    params: ''
  },
  test: {
    host: '',
    port: 6379,
    username: '',
    password: '',
    database: '',
    params: ''
  },
  production: {
    host: '',
    port: 6379,
    username: '',
    password: '',
    database: '',
    params: ''
  }
};

module.exports = cache;
