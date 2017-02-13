/**
 * Created by danielobrien on 2/6/17.
 */
/**
 * Created by danielobrien on 1/24/17.
 */

'use strict';

angular.module('myApp.servicesPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: '../servicesPage/servicesPage.html',
            controller: 'ServicesPageCtrl'
        });
    }])

    .controller('ServicesPageCtrl',
        ['$scope', '$location', function($scope, $location) {

            //$scope.currentPageImage = {background: 'url(../images/about.jpg)'};
            $scope.message = "Contact us and we won't bother our holes getting back to you";
            $scope.loadServices = function () {
                $location.url('/services');
            };
        }]);
