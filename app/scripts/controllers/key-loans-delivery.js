'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansDeliveryCtrl
 * @description
 * # KeyLoansDeliveryCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansDeliveryCtrl', function (moment, $localStorage) {
    var vm = this;
    //Hour
    vm.mytime = new Date();
    // Datepicker
    vm.datepicker = {
      format: 'dd-MM-yyyy',
      date: new Date(),
      opened: false,
      dateOptions: {
        formatYear: 'yy',
        maxDate: moment(),
        minDate: moment().subtract(1, 'month'),
        startingDay: 1
      },
      altInputFormats: ['d!/M!/yyyy'],
      open: function(){
        vm.datepicker.opened = true;
      }
    };

  });
