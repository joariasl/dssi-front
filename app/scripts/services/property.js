'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Property
 * @description
 * # Property
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Property', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/properties/:id');

    return service;
  });
