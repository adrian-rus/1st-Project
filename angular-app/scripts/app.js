'use strict';

/**
 * @ngdoc overview
 * @name angular-app
 * @description
 * # angular-app
 *
 * Main module of the application.
 */
angular
  .module('angular-app', [
    'ngCookies',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($httpProvider) {
    
  })
  .run(function ($rootScope, $location, AuthenticationService, options, UtilsService) {
    

  });