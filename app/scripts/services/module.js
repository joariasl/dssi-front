'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Module
 * @description
 * # Module
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Module', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/modules/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
