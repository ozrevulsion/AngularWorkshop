angular.module("Talkative", []).controller('TalkativeOutputController', ['$scope', function($scope) {
  $scope.whatAmI = "I am an Angular god!";
}])
.controller('TalkativeInputController', ['$scope', function($scope) {
  $scope.iAmThis = "";
}]);
