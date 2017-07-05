'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.ChecklistItemGroup
 * @description
 * # ChecklistItemGroup
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('ChecklistItemGroup', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/checklist-item-groups/:id', null,
    {
      'update': { method:'PUT' }
    });

    return service;
  });
