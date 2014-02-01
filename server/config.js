var config = require('../config/config.json');


module.exports = function(app) {
  app.name = config.name;

  return config;
};
