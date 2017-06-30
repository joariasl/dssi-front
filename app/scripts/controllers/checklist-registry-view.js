'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistryViewCtrl
 * @description
 * # ChecklistRegistryViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistryViewCtrl', function ($state, $stateParams, ChecklistRegistry, ChecklistItemGroup, $localStorage, Turns) {
    var vm = this;
    vm.checklistTurns = Turns.turns;
    vm.checklistsRegistry = ChecklistRegistry.get({
      id: $stateParams.id
    });
  });
