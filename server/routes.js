var router = require('koa-route');
var views = require('koa-render');

module.exports = function(app) {
  // set views engine
  app.use(views('./server/views', 'jade'));

  // render index
  app.use(router.get('/*', function *(next) {
    this.body = yield this.render('index', {
      title: 'Example App'
    });
  }));


}
