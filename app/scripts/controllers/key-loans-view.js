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
    vm.load = load;
    vm.keyLoanStatus = keyLoanStatus;

    ////////////

    function load(tableState){
      var pagination = tableState.pagination;
      var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
      var number = pagination.number || 15;  // Number of entries showed per page.
      var search = tableState.search.predicateObject;
      var sort = tableState.sort;

      vm.keyLoans = KeyLoan.query({
        property_id: $localStorage.property_id,
        page: 1 + Math.floor(start/number),
        search: search,
        sort: {
          field: sort.predicate,
          direction: (sort.reverse?'desc':'asc')
        }
      }, function(result, headers){
        tableState.pagination.numberOfPages = 1 + Math.floor(headers('total')/headers('per_page'));
      });
    }

    function keyLoanStatus(key_loan){
      var status = '';
      if(key_loan.amphitryon_return){
        status = "Devuelta";
      } else {
        status = "Prestada";
      }
      return status;
    };
  });
