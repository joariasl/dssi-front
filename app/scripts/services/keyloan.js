'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.KeyLoan
 * @description
 * # KeyLoan
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('KeyLoan', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/key-loans/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
