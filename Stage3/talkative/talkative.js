angular.module('Talkative', [])
.controller('TalkativeOutputController', ['$scope', function($scope) {
  $scope.id = 'a really long guid';
  $scope.name = 'the name of my task';
  $scope.isComplete = true;
}]);
