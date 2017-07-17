'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansDeliveryCtrl
 * @description
 * # KeyLoansDeliveryCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansDeliveryCtrl', function (moment, $localStorage, Key, KeyLoan, Amphitryon, notificationService, $state, $log) {
    var vm = this;
    vm.save = save;
    vm.searchAmphitryon = searchAmphitryon;
    vm.searchKey = searchKey;

    // Datepicker
    vm.datepicker = {
      format: 'dd/MM/yyyy',
      date: new Date(),
      opened: false,
      dateOptions: {
        formatYear: 'yy',
        maxDate: moment(),
        minDate: moment().subtract(1, 'month'),
        startingDay: 1
      },
      altInputFormats: ['d!-M!-yyyy'],
      open: function(){
        vm.datepicker.opened = true;
      }
    };

    vm.amphitryon = null;
    vm.key = null;

    vm.keyLoan = new KeyLoan({
      delivery_datetime: new Date()
    });

    ////////////

    function searchAmphitryon(rut){
      var searchRut = rut;//rut.substr(0,rut.length-1).replace(/[^\d]*/g,'');
      if(searchRut){
        var amphitryon = Amphitryon.query({
          search: {"person_rut": searchRut}
        });
        return amphitryon.$promise;
      }
    }

    function searchKey(code){
      var keys = Key.query({
        property_id: $localStorage.property_id,
        search: {"code": code}
      });
      return keys.$promise;
    }

    function save(){
      if(vm.amphitryon && vm.key){
        // Agregar atributos faltantes
        vm.keyLoan.delivery_amphitryon_id = vm.amphitryon.id;
        vm.keyLoan.key_id = vm.key.id;

        // Guardar
        vm.keyLoan.$save().then(function(){
          notificationService.success('¡Registro de préstamo exitoso!');
          $state.go('^.key-loans');
        }, function(){
          notificationService.error('No ha sido posible atender la solicitud.');
        });
      }
    }

  });
