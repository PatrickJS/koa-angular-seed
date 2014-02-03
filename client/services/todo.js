angular.module('app.services')
.factory('TodoService', function($window, $q) {
  var _todos = [];

  var counter = (function() {
    var count = 0;
    return function() {
      return ++count;
    };
  }());


  return {
    get: function() {
      return _todos;
    },
    add: function(todo) {
      todo.id = counter();
      _todos.push(todo);
    },
    remove: function(todo) {
      var index = _todos.indexOf(todo);
      if (index !== -1) {
        _todos.splice(index, 1);
      }
    },
    update: function(newTodo, oldTodo) {
      var index = _todos.indexOf(oldTodo);
      _todos[index] = newTodo;
    }


  };

});
