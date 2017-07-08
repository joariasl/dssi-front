'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Key
 * @description
 * # Key
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Key', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/keys/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
