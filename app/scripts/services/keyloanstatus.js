'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.KeyLoanStatus
 * @description
 * # KeyLoanStatus
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('KeyLoanStatus', function () {
    var service = {
      key_loan_statuses: [
        {
          id: 0,
          name: 'No prestada'
        },
        {
          id: 1,
          name: 'Prestada'
        }
      ]
    };

    return service;
  });
