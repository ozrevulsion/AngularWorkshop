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
.controller('TalkativeInputController', ['$scope', '$http', function($scope, $http) {
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
})
.directive('tktvGetAll', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-get-all.html',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.getAll = function() {
        $http({method: 'GET', url: 'http://localhost:6969/api/todo/items'})
          .success(function(results) {
            $scope.$emit('newResultsAvailable', results);
          });
      };
    }]
  }
});
