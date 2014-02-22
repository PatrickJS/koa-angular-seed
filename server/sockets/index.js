var client = require('socket.io');

module.exports = function(app, config, errors) {
  client = client.listen(config.sockets.port).sockets;

  return client;
};
