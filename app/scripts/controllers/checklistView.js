'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistViewCtrl
 * @description
 * # ChecklistViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistViewCtrl', function () {
    var vm = this;
    vm.checklistItemGroups = [
      {
        group: 'OPERATIVIDAD'
      },
      {
        group: 'ACTIVIDAD'
      }
    ];
    vm.checklistsRegistries = [
      {
        id: '1',
        date: '18/06/1990',
        turn: 'Mañana',
        entries: [
          {
            id: 1,
            response: true,
            observation: 'Una observación'
          },
          {
            id: 2,
            response: false,
            observation: 'Otra observación'
          }
        ],
        delivered: '10',
        avaliable: '20'
      }
    ];
  });
