'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl',
    ['$scope', '$location', function($scope, $location) {

      $scope.currentPageImage = {background: 'url(../images/about.jpg)'};
      $scope.message = 'We are a crappy company with fuck all to offer';
        $scope.loadAbout = function () {
        $location.url('/view2');
      };
}]);