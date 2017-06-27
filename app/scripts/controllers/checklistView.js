'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistViewCtrl
 * @description
 * # ChecklistViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistViewCtrl', function (ChecklistRegistry, ChecklistItemGroup, $localStorage) {
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
      property_id: $localStorage.property_id
    });
    vm.checklistsRegistries = ChecklistRegistry.query({
      property_id: $localStorage.property_id
    });
  });
