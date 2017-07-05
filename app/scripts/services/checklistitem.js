'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.ChecklistItem
 * @description
 * # ChecklistItem
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('ChecklistItem', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/checklist-items/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
