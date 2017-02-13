/**
 * Created by danielobrien on 1/26/17.
 */
'use strict';

angular.module('myApp.loginPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'loginPage/loginPage.html',
            controller: 'LoginPageCtrl'
        });
    }])

    .controller('LoginPageCtrl',
        ['$scope', '$location', function($scope, $location) {

            //$scope.currentPageImage = {background: 'url(../images/about.jpg)'};
            $scope.message = "Contact us and we won't bother our holes getting back to you";
            $scope.loginTable = function () {
                $location.url('/login');
            };
        }]);
