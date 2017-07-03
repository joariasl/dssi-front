'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansReturnCtrl
 * @description
 * # KeyLoansReturnCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansReturnCtrl', function () {
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
