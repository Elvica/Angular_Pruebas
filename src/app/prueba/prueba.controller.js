(function() {
  'use strict';

  angular
    .module('MyApp')
    .controller('PruebaController', PruebaController);

  function PruebaController(pruebaServicio) {

    var vm = this;

    vm.mensaje = 'hola';

    vm.mensajeServicio = pruebaServicio.getMensaje();

    vm.mensajeAPI = 'nada';

    pruebaServicio.weatherCityName('madrid').then(
      function (data) {
        vm.mensajeAPI = data;
      },
      function (err) {
        vm.mensajeAPI=err;
      }
    )

    vm.array = [
      'uno',
      'dos'
    ]

  }
})();
