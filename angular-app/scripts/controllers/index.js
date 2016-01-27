'use strict';

/**
 * @ngdoc function
 * @name angular-app.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the angular-app
 */
angular.module('angular-app')
  .controller('IndexCtrl', function ($scope, $rootScope) {
      //HERE
      $scope.name = 'Hello';
  });