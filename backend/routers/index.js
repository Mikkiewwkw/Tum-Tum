'use strict'

const APIPATH = '/api';

const Router = require('koa-router');
let router = new Router();

// Create API router and default response
router.prefix(APIPATH);
router.use('/', async (ctx, next) => {
  ctx.body = {
    status: 'success',
    url: ctx.url,
    timestamp: Date.now(),
    data: {}
  };
  await next();
});

// Load sub routers
router.use('/s', require('./site.router').routes());

module.exports = router;
