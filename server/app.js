var koa = require('koa');

module.exports = function(SERVER_ROOT) {
  var app = koa();
  app.directory = SERVER_ROOT;

  // Config
  var config = require('./config')(app);

  // Errors
  var errors = require('./errors')(app, config);

  // Middleware
  require('./middleware')(app, config, errors);

  // Database
  require('./database')(app, config, errors);

  // Routes
  require('./routes')(app, config, errors);

  return app;
};
