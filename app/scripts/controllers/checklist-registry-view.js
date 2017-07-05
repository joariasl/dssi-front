'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistryViewCtrl
 * @description
 * # ChecklistRegistryViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistryViewCtrl', function ($state, $stateParams, ChecklistRegistry, ChecklistItemGroup, $localStorage, Turns, $filter) {
    var vm = this;
    vm.checklistTurns = Turns.turns;
    vm.checklistRegistry = ChecklistRegistry.get({
      id: $stateParams.id
    });
    vm.checklistRegistry.$promise.then(function(){
      vm.total_ok = $filter('filter')(vm.checklistRegistry.checklist_entries, {response:1}).length;
    });
  });
