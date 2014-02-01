var koa = require('koa');

module.exports = function(SERVER_ROOT) {
  var app = koa();
  app.directory = SERVER_ROOT;

  // Config
  var config = require('./config')(app);

  // Errors
  var errors = require('./errors')(app, config);

  // Logging
  require('./middleware')(app, config, errors);

  // Routes
  require('./routes')(app, config, errors);

  return app;
};
