var todo = require('./todo');
module.exports = function(app, config, errors) {
  return {
    todo: todo
  };
};
