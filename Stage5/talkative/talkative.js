angular.module("Talkative", [])
.controller('TalkativeOutputController', ['$scope', function($scope) {
  $scope.results = [
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: true
    },
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: false
    },
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: true
    },
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: true
    },
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: true
    },
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: true
    },
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: true
    }
  ];
}])
.directive('tktvResult', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-result.html',
    scope: {
      result: "="
    }
  };
})
.directive('tktvResultsList', function() {
  return {
    restrict: 'E',
    templateUrl: 'talkative/templates/tktv-results-list.html',
    scope: {
      results: "="
    }
  };
});
