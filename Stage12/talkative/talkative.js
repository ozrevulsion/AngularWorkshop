function getOneItem($http, $scope, Id) {
  $http({method: 'GET', url: 'http://localhost:6969/api/todo/items/' + Id})
    .success(function(results) {
      $scope.$emit('newResultsAvailable', [results]);
    })
    .error(function (e) {
      $scope.$emit('clearResults');
      toastr.error('Either that wasn\'t a valid Id or the server is having a really bad day.');
    });
};

angular.module('Talkative', [])
.controller('TalkativeMainController', ['$scope', function($scope) {
  $scope.$on('newResultsAvailable', function(e, newResults) {
    $scope.$broadcast('resultsReadyToDisplay', newResults);
  });

  $scope.$on('clearResults', function() {
    $scope.$broadcast('resultsReadyToDisplay', []);
  });
}])
.controller('TalkativeOutputController', ['$scope', function($scope) {
  $scope.results = [];
  $scope.$on('resultsReadyToDisplay', function(e, resultsToDisplay) {
    $scope.results = resultsToDisplay;
  });
}])
.controller('TalkativeInputController', ['$scope', '$http', function($scope, $http) {
  $scope.activeView = 'selector';
  $scope.isActiveView = function(viewName) {
    return viewName === $scope.activeView;
  };
  $scope.setView = function(viewName) {
    $scope.activeView = viewName;
    $scope.$emit('clearResults');
  }
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
})
.directive('tktvGetOne', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-get-one.html',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.searchId = '';
      $scope.getOne = function() {
        getOneItem($http, $scope, $scope.searchId);
      }
    }]
  }
})
.directive('tktvNewItem', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-new-item.html',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.newName = '';
      $scope.makeNewItem = function() {
        $http({method: 'POST', url: 'http://localhost:6969/api/todo/items/', data: { Name: $scope.newName }})
          .success(function(results) {
            getOneItem($http, $scope, results);
            toastr.success('Item successfully created, you\'re looking at it in your view right now');
          })
          .error(function (e) {
            $scope.$emit('clearResults');
            toastr.error('Either that wasn\'t a valid Id or the server is having a really bad day.');
          });
      };
    }]
  }
})
.directive('tktvInputSelector', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-input-selector.html'
  };
});
