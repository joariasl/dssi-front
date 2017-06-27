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
        id: 0,
        name: 'Dashboard',
        icon: 'dashboard'
      },
      {
        id: 1,
        name: 'Control de Acceso',
        icon: 'unlock-alt',
        items: [
          {
            id: 2,
            name: 'Checklist',
            state: 'access-control.checklist.view',
          },
          {
            id: 3,
            name: 'Visitas',
            state: 'access-control.visits.view',
          },
          {
            id: 4,
            name: 'Llaves',
            state: 'access-control.keys.view',
          }
        ]
      },
      {
        id: 1,
        name: 'Sistema',
        icon: 'gears',
        items: [
          {
            id: 5,
            name: 'Usuarios',
            state: '',
          }
        ]
      }
    ];
  });
