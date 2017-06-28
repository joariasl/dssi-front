'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeysReturnCtrl
 * @description
 * # KeysReturnCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeysReturnCtrl', function () {
    var vm = this;
    vm.condition= [
      {
        name: 'Operativa'
      },
      {
        name: 'Quebrada'
      },
      {
        name: 'Dañada'
      },
      {
        name: 'Otros'
      }
    ];
  });
