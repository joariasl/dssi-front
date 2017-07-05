'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Checklist
 * @description
 * # Checklist
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Checklist', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/checklists/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
