'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyLoansViewCtrl
 * @description
 * # KeyLoansViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyLoansViewCtrl', function (KeyLoan, $localStorage, $log) {
    var vm = this;

    vm.totalItems = 0; // 10 = 1 Página
    vm.currentPage = 1; //Cominenzo de la paginación
    vm.itemsPerPage = 10;
    vm.maxSize = 5;

    vm.keyLoans = KeyLoan.query({
      property_id: $localStorage.property_id
    });

    //Paginator
    vm.keyLoans.$promise.then(function(){
      vm.totalItems = vm.keyLoans.length;
    });

    vm.setPage = function (pageNo) {
      vm.currentPage = pageNo;
    };

    vm.pageChanged = function() {
      $log.log('Page changed to: ' + vm.currentPage);
    };

    vm.setItemsPerPage = function(num) {
      vm.itemsPerPage = num;
      vm.currentPage = 1; //reset to first page
    }
  });
