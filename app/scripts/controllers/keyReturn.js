'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyReturnCtrl
 * @description
 * # KeyReturnCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyReturnCtrl', function () {
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
