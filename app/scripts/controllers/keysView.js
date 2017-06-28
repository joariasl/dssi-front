'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeysViewCtrl
 * @description
 * # KeysViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeysViewCtrl', function (KeyLoan) {
    var vm = this;
    /*
    vm.keyLoans= [
      {
        id: 1,
        date: '01-01-2017',
        hour: '09:00',
        key: 'S-126',
        has: 'Juan Peréz',
        place: 'Oficina',
      },
      {
        id: 2,
        date: '01-02-2017',
        hour: '19:00',
        key: 'A-239',
        has: 'Maria Lopez',
        place: 'Bodega',
      }
    ];
    */
    vm.keyLoans = KeyLoan.query({
      keyloan_id: '1'
    });
  });
