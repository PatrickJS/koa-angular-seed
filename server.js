var PORT = process.env.PORT = (process.env.PORT || 3000);
var server = require('./server/app')(__dirname);
server.listen(PORT, function() {
  console.log('\n', 'listening on port', PORT, 'in', server.env);
});
