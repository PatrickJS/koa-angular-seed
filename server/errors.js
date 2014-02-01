
module.exports = function(app, config) {
  var errors = {};

  app.on('error', function(err){
    console.error('server error', err);
  });

  return errors;
};
