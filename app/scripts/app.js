'use strict';

/**
 * @ngdoc overview
 * @name fantooAppApp
 * @description
 * # fantooAppApp
 *
 * Main module of the application.
 */
angular
  .module('fantooAppApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
