var server = require('./server/app')(__dirname);
server.listen(3000, function() {
  console.log('\n', 'listening on port 3000 in', server.env);
});
