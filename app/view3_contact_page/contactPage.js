/**
 * Created by danielobrien on 1/24/17.
 */

'use strict';

angular.module('myApp.contactPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'view3_contact_page/contactPage.html',
        controller: 'ContactPageCtrl'
    });
}])

.controller('ContactPageCtrl',
    ['$scope', '$location', function($scope, $location) {

        //$scope.currentPageImage = {background: 'url(../images/about.jpg)'};
        $scope.message = "Contact us and we won't bother our holes getting back to you";
        $scope.loadContact = function () {
            $location.url('/contact');
        };
    }]);
