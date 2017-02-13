/**
 * Created by danielobrien on 1/26/17.
 */

'use strict';

angular.module('myApp.signUpPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signUpPage/signUpPage.html',
            controller: 'SignUpPageCtrl'
        });
    }])

    .controller('SignUpPageCtrl',
        ['$scope', '$location', function($scope, $location) {

            //$scope.currentPageImage = {background: 'url(../images/about.jpg)'};
            $scope.message = "Contact us and we won't bother our holes getting back to you";
            $scope.signUp = function () {
                $location.url('/signup');
            };
        }]);

