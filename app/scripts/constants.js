'use strict';

/**
 * @ngdoc overview
 * @name dssiFrontApp
 * @description
 * # dssiFrontApp
 *
 * Main module of the application.
 */
angular
  .module('dssiFrontApp')
  .constant('urls', {
    BASE_URL: 'http://localhost:8000',
    BASE_API: 'http://localhost:8000/api'
  });
