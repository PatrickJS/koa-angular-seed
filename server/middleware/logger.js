
 module.exports = function(app) {

  // Response time
  app.use(function* responseTime(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms')
  });

  // Logger
  app.use(function* logger(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
  });

  app.on('error', function(err, ctx){
    console.error('server error', err, ctx);
  });

 }

