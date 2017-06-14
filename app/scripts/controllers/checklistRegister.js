'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegisterCtrl
 * @description
 * # ChecklistRegisterCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegisterCtrl', function () {
    var vm = this;
    vm.checklistTurns= [
      {
        turn: 'Mañana'
      },
      {
        turn: 'Tarde'
      },
      {
        turn: 'Noche'
      }
    ];
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
