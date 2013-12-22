var koa = require('koa');
var app = koa();

module.exports = function(SERVER_ROOT) {
  app.name = 'Koa-Angular-Seed';
  app.rootPath = SERVER_ROOT;

  // logger
  require('./middleware/logger')(app);

  // routes
  require('./routes')(app);

  return app;
}
