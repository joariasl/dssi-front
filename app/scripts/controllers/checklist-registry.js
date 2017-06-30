'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistryCtrl
 * @description
 * # ChecklistRegistryCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistryCtrl', function (Turns) {
    var vm = this;
    vm.checklistTurns = Turns.turns;
    vm.checklistItemGroups = [
      {
        name: 'Operatividad',
        items: [
          {
            name: 'Equipo radial'
          },
          {
            name: 'Computador'
          },
          {
            name: 'Sistemas de cámaras'
          },
          {
            name: 'Sistema de enrolamiento'
          },
          {
            name: 'Celular'
          },
          {
            name: 'Pantalla eventos actualizada'
          },
          {
            name: 'Ascensores'
          }
        ],
      },
      {
        name: 'Actividad',
        items: [
          {
            name: 'Retiro de basura'
          },
          {
            name: 'Ingreso camión de valores'
          },
          {
            name: 'Retiro de lavandería'
          }
        ],
      }
    ];
  });
