'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansReturnCtrl
 * @description
 * # KeyLoansReturnCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansReturnCtrl', function (moment, $stateParams, KeyCondition, $localStorage, KeyLoan, Amphitryon, notificationService, $log) {
    var vm = this;
    vm.update = update;
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
      return_datetime: new Date()
    });

    vm.keyLoanDelivery = KeyLoan.get({
      id: $stateParams.id
    });

    vm.keyConditions = KeyCondition.query({
      property_id: $localStorage.property_id
    });

    ////////////

    function updateKeyConditionItem(keyConditionItem){
      delete keyConditionItem.key_condition;
      KeyConditionItem.update({id: keyConditionItem.id}, keyConditionItem).$promise.then(function(){
        notificationService.success('¡Actualizado!');
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });
    }

    function searchAmphitryon(){
      var rut = vm.search_amphitryon_rut;
      var searchRut = rut.substr(0,rut.length-1).replace(/[^\d]*/g,'');
      if(searchRut){
        vm.amphitryon = Amphitryon.get({
          person_rut: searchRut
        });
      }
    }

    function update(){
      if(vm.amphitryon){
        $log.log("Ahora si se guarda");
        // Agregar atributos faltantes
        vm.keyLoan.delivery_amphitryon_id = vm.keyLoanDelivery.delivery_amphitryon_id;
        vm.keyLoan.return_amphitryon_id = vm.amphitryon.id;
        vm.keyLoan.key_id = vm.keyLoanDelivery.id;

        // Guardar

        vm.keyLoan.$update().then(function(){
          notificationService.success('Registro de devolución exitoso!');
          $state.go('^.view');
        }, function(){
          notificationService.error('No ha sido posible atender la solicitud.');
        });
          $log.log(vm.keyLoan);
      } else {
        $log.log("No hay ampithryon");
      }
    }

  });
