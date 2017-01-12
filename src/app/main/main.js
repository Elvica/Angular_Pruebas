'use strict';

angular.module('MyApp')
    .config(function routerConfig($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        });
    });

