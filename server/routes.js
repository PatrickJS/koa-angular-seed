var router = require('koa-route');
var views = require('koa-render');
var serve = require('koa-static');

module.exports = function(app) {
  // set views engine
  app.use(views('./server/views', 'jade'));

  // serve build files
  app.use(serve(app.rootPath + '/build'));

  // render index
  app.use(router.get('/*', function *(next) {
    this.body = yield this.render('index', {
      title: 'Example App'
    });
  }));


};
