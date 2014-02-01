var logger = require('koa-logger');

module.exports = function(app) {

  app.use(logger());

  // Response time
  // app.use(function* responseTime(next){
  //   var start = new Date;
  //   yield next;
  //   var ms = new Date - start;
  //   this.set('X-Response-Time', ms + 'ms')
  // });

  // Logger
  // app.use(function* logger(next) {
  //   var start = new Date;
  //   yield next;
  //   var ms = new Date - start;
  //   console.log('%s %s - %s', this.method, this.url, ms);
  // });

};

