'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Turns
 * @description
 * # Turns
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Turns', function () {
    var service = {
      turns: [
        {
          id: 1,
          name: 'Mañana'
        },
        {
          id: 2,
          name: 'Tarde'
        },
        {
          id: 3,
          name: 'Noche'
        }
      ]
    };

    return service;
  });
