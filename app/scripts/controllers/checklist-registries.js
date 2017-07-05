'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistriesCtrl
 * @description
 * # ChecklistRegistriesCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistriesCtrl', function (ChecklistRegistry, ChecklistItemGroup, $localStorage, Turns, $filter, $log) {
    var vm = this;
    vm.checklistTurns = Turns.turns;
    vm.checklistItemGroups = ChecklistItemGroup.query({
      property_id: $localStorage.property_id
    });
    vm.checklistItemGroups.$promise.then(function(){
      vm.checklistsRegistries = ChecklistRegistry.query({
        property_id: $localStorage.property_id
      });
      vm.checklistsRegistries.$promise.then(function(){
        angular.forEach(vm.checklistsRegistries, function(checklistRegistry, key) {
          checklistRegistry.total_ok = $filter('filter')(checklistRegistry.checklist_entries, {response:1}).length;
          checklistRegistry.total_groups = {};
          angular.forEach(vm.checklistItemGroups, function(checklistItemGroup, key) {
            checklistRegistry.total_groups[checklistItemGroup.id] = {
              total: $filter('filter')(checklistRegistry.checklist_entries, function(item){
                return item.checklist_item.checklist_item_group_id === checklistItemGroup.id;
              }).length,
              total_ok: $filter('filter')(checklistRegistry.checklist_entries, function(item){
                return item.checklist_item.checklist_item_group_id === checklistItemGroup.id && item.response == 1;
              }).length
            };
          });
        });
      });
    });
  });
