'use strict';

/**
 * @ngdoc overview
 * @name myApp1
 * @description
 * # myApp1
 *
 * Main module of the application.
 */
angular
  .module('myApp1', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/demo1', {
        templateUrl: 'views/demo1.html',
        controller: 'Demo1Ctrl'
      })
      .when('/democrud', {
        templateUrl: 'views/democrud.html',
        controller: 'DemoCrudCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

