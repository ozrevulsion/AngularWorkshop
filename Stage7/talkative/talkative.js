angular.module('Talkative', [])
.controller('TalkativeMainController', ['$scope', function($scope) {
  $scope.$on('newResultsAvailable', function(e, newResults) {
    $scope.$broadcast('resultsReadyToDisplay', newResults);
  });
}])
.controller('TalkativeOutputController', ['$scope', function($scope) {
  $scope.results = [];
  $scope.$on('resultsReadyToDisplay', function(e, resultsToDisplay) {
    $scope.results = resultsToDisplay;
  });
}])
.controller('TalkativeInputController', ['$scope', function($scope) {
  $scope.getAll = function() {
    $scope.$emit('newResultsAvailable', [
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
