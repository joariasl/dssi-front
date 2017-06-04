'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('MenuCtrl', function () {
    var vm = this;
    vm.menu = [
      {
        id: 1,
        name: 'Control de Acceso',
        icon: 'unlock-alt',
        items: [
          {
            id: 2,
            name: 'Checklist',
            state: 'main',
            icon: 'file-text-o'
          },
          {
            id: 3,
            name: 'Llaves',
            state: 'about',
            icon: 'key'
          }
        ]
      }
    ]
  });
