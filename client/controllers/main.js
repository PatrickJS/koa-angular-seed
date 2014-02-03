angular.module('ngKoaApp')
.controller('TodoCtrl', function($scope, TodoService) {

  $scope.todos = TodoService.get();

  $scope.add = function(todo) {
    TodoService.add(todo);
    $scope.newTodo = {};
  };

  $scope.remove = function(todo) {
    TodoService.remove(todo);
  };

  $scope.complete = function(todo) {
    todo.complete = !todo.complete;
  };

});
