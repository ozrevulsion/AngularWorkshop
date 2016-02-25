angular.module('Talkative', [])
.controller('TalkativeMainController', ['$scope', function($scope) {
  $scope.results = [];
  $scope.updateResults = function(newResults) {
    $scope.results = newResults;
  };
}])
.controller('TalkativeOutputController', ['$scope', function($scope) {
}])
.controller('TalkativeInputController', ['$scope', function($scope) {
  $scope.getAll = function() {
    $scope.updateResults([
      {
        id: 'a really long guid',
        name: 'name of my task',
        isComplete: true
      },
      {
        id: 'a really long guid',
        name: 'name of my task',
        isComplete: false
      },
      {
        id: 'a really long guid',
        name: 'name of my task',
        isComplete: true
      },
      {
        id: 'a really long guid',
        name: 'name of my task',
        isComplete: true
      },
      {
        id: 'a really long guid',
        name: 'name of my task',
        isComplete: true
      },
      {
        id: 'a really long guid',
        name: 'name of my task',
        isComplete: true
      },
      {
        id: 'a really long guid',
        name: 'name of my task',
        isComplete: true
      }
    ]);
  };
}])
.directive('tktvResult', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-result.html',
    scope: {
      result: '='
    }
  };
})
.directive('tktvResultsList', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-results-list.html',
    scope: {
      results: '='
    }
  };
});
