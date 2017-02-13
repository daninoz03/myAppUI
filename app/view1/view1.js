'use strict';

var homeApp = angular.module('myApp.view1', ['ngRoute']);

homeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

homeApp.controller('View1Ctrl',
    ['$scope', '$location', function($scope, $location) {

      $scope.currentPageImage = {background: 'url(../images/home.jpg)'};
      $scope.message = 'You are now on the home page. Ta-da';
  $scope.loadHome = function () {
    $location.url('/view1');
  };
}]);