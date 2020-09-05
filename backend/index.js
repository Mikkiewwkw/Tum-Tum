'use strict'

// Load Koajs
const Koa = require('koa');
const app = new Koa();

// Load Sequelize
const { Sequelize } = require('sequelize');

// Load Configurations
const globalConfig = require('./configs');

// Load Koa Bodyparser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// Load Routers and add routers to Koa
const routers = require('./routers');
app.use(routers.routes());

// Log connection information (now print it on the screen)
app.use(async (ctx, next) => {
  await next();
  console.log();
});

// Load Database, test DB connection and start server
const db = require('./libs/db');
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected.');
    app.listen(15099);
    console.log("API server is listening port 15099");
  })
  .catch((err) => {
    console.log('Fail to connect the database: ' + err);
  })
