'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansReturnCtrl
 * @description
 * # KeyLoansReturnCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansReturnCtrl', function (moment, $localStorage, Key, KeyLoan, Amphitryon, notificationService, $log) {
    var vm = this;
    vm.updateKeyConditionItem = updateKeyConditionItem;
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

    vm.search_amphitryon_rut = null;
    vm.amphitryon = null;
    vm.search_key_code = null;
    vm.key = null;

    vm.keyLoan = new KeyLoan({
      return_datetime: new Date()
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

    function searchKey(){
      var searchCode = vm.search_key_code;
      vm.key = Key.get({
        code: searchCode
      });
    }

  });
