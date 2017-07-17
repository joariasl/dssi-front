'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.KeyCondition
 * @description
 * # KeyCondition
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('KeyCondition', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/key-conditions/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
