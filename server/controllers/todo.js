var parse = require('co-body');
var DB = [];

function *create() {
  var todo = yield parse.json(this);
  DB.push(todo);
  this.body = JSON.stringify(todo);
}

function *list() {
  this.body = yield JSON.stringify(DB);
}

exports.create = create;
exports.list = list;
