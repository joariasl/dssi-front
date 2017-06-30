'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistriesCtrl
 * @description
 * # ChecklistRegistriesCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistriesCtrl', function (ChecklistRegistry, ChecklistItemGroup, $localStorage, Turns) {
    var vm = this;
    vm.checklistTurns = Turns.turns;
    vm.checklistItemGroups = ChecklistItemGroup.query({
      property_id: $localStorage.property_id
    });
    vm.checklistsRegistries = ChecklistRegistry.query({
      property_id: $localStorage.property_id
    });
  });
