'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansReturnCtrl
 * @description
 * # KeyLoansReturnCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansReturnCtrl', function (moment, $stateParams, KeyCondition, $localStorage, KeyLoan, Amphitryon, notificationService, $state, $log) {
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

    vm.keyLoan = KeyLoan.get({
      id: $stateParams.id
    }, function(data){
      $log.log(data, data.return_datetime);
      if(!data.return_datetime){
        vm.keyLoan.return_datetime = new Date();
      }
    });

    vm.keyConditions = KeyCondition.query({
      property_id: $localStorage.property_id
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

    function update(){
      if(vm.keyLoan.key_loan_status === 1){
        if(vm.keyLoan.amphitryon_return){
          // Agregar atributos faltantes
          vm.keyLoan.return_amphitryon_id = vm.keyLoan.amphitryon_return.id;

          // Guardar
          vm.keyLoan.$update().then(function(){
            notificationService.success('¡Registro de devolución exitoso!');
            //$state.go('^.key-loans');
            $state.reload();
          }, function(){
            notificationService.error('No ha sido posible atender la solicitud.');
          });
        }
      } else {
        notificationService.error('¡El registro no se encuentra en estado "Prestado"!');
      }
    }

  });
