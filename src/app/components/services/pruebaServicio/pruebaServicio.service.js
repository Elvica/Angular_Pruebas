(function() {
  'use strict';

  angular
    .module('MyApp')
    .service('pruebaServicio', pruebaServicio);

  /** @ngInject */
  function pruebaServicio($http, $q) {

    var mensajeServicio = 'mensaje servicio';
    var apiKey = '673f75acd8356405d41d7e11f312d0d3';

    this.getMensaje = function () {
      return mensajeServicio;
    };

    this.weatherCityName = function (cityName){
      return $q(function(resolve, reject){
        $http({
          method: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID='+apiKey
        }).then(function successCallback(response) {
          resolve(response)
        }, function errorCallback(response) {
          reject(response)
        });
      });
    }

  }

})();
