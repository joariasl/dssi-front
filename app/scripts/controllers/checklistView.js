'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistViewCtrl
 * @description
 * # ChecklistViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistViewCtrl', function ($state, $stateParams, ChecklistRegistry, ChecklistItemGroup, $localStorage) {
    var vm = this;
    vm.checklistTurns= [
      {
        name: 'Mañana'
      },
      {
        name: 'Tarde'
      },
      {
        name: 'Noche'
      }
    ];
    vm.checklistsRegistry = ChecklistRegistry.get({
      id: $stateParams.id
    });
  });
