'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansDeliveryCtrl
 * @description
 * # KeyLoansDeliveryCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansDeliveryCtrl', function (moment, $localStorage, KeyLoan, Amphitryon, notificationService, $log) {
    var vm = this;
    vm.save = save;
    vm.searchAmphitryon = searchAmphitryon;

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

    vm.search_amphitryon_rut = null;
    vm.amphitryon = null;

    vm.keyLoan = new KeyLoan({
      delivery_datetime: new Date()
    });

    ////////////

    function searchAmphitryon(){
      var rut = vm.search_amphitryon_rut;
      var searchRut = rut.substr(0,rut.length-1).replace(/[^\d]*/g,'');
      vm.amphitryon = Amphitryon.get({
        person_rut: searchRut
      });
    }

    function save(){
      if(vm.amphitryon){
        $log.log("Ahora si se guarda");
        // Agregar atributos faltantes
        vm.keyLoan.delivery_ampithryon_id = vm.amphitryon.id;

        // Guardar

        vm.keyLoan.$save().then(function(){
          notificationService.success('Checklist guardada!');
          $state.go('^.view');
        }, function(){
          notificationService.error('No ha sido posible atender la solicitud.');
        });;
          $log.log(vm.keyLoan);
      } else {
        $log.log("No hay ampithryon");
      }
    }

  });
