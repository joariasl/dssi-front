'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.checklist
 * @description
 * # checklist
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Checklist', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/checklists/:id');

    return service;
  });
