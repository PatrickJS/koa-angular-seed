var koa = require('koa');

module.exports = function(ROOT) {
  var app = koa();
  app.directory = ROOT;

  // Config
  var config = require('./config')(app);

  // Errors
  var errors = require('./errors')(app, config);

  // Middleware
  require('./middleware')(app, config, errors);

  // Database
  require('./database')(app, config, errors);

  // Sockets
  require('./sockets')(app, config, errors);

  // Routes
  require('./routes')(app, config, errors);

  return app;
};
