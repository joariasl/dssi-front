'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.ChecklistRegistry
 * @description
 * # ChecklistRegistry
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('ChecklistRegistry', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/checklist-registries/:id');

    return service;
  });
