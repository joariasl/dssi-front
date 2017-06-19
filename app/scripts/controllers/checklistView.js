'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistViewCtrl
 * @description
 * # ChecklistViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistViewCtrl', function (ChecklistRegistry, ChecklistItemGroup) {
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
    vm.checklistItemGroups = ChecklistItemGroup.query({
      checklist_id: '1'
    });
    vm.checklistsRegistries = ChecklistRegistry.query({
      checklist_id: '1'
    });
  });
