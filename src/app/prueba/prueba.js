'use strict';

angular.module('MyApp')
  .config(function routerConfig($stateProvider) {
    $stateProvider
      .state('prueba', {
        url: '/prueba',
        templateUrl: 'app/prueba/prueba.html',
        controller: 'PruebaController',
        controllerAs: 'prueba'
      });
  });

