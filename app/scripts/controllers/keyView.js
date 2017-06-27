'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyViewCtrl
 * @description
 * # KeyViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyViewCtrl', function () {
    var vm = this;
    vm.key= [
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
  });
