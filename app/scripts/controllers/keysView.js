'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeysViewCtrl
 * @description
 * # KeysViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeysViewCtrl', function (KeyLoan, $localStorage) {
    var vm = this;
    vm.keyLoans = KeyLoan.query({
      property_id: $localStorage.property_id
    });
  });
