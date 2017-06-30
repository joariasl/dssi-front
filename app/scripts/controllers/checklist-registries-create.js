'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistriesCreateCtrl
 * @description
 * # ChecklistRegistriesCreateCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistriesCreateCtrl', function (Turns, moment) {
    var vm = this;
    vm.checklistTurns = Turns.turns;

    // Datepicker
    vm.datepicker = {
      format: 'dd-MM-yyyy',
      date: new Date(),
      opened: false,
      dateOptions: {
        formatYear: 'yy',
        maxDate: moment(),
        minDate: moment().subtract(1, 'month'),
        startingDay: 1
      },
      altInputFormats: ['d!/M!/yyyy'],
      open: function(){
        vm.datepicker.opened = true;
      }
    };

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
