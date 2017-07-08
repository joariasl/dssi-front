'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Amphitryon
 * @description
 * # Amphitryon
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Amphitryon', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/amphitryons/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
