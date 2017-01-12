'use strict';

angular.module('MyApp', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ui.router',
    'ui.bootstrap',
    'toastr'])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
