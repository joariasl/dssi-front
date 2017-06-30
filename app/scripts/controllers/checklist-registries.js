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
    vm.checklistsRegistries = ChecklistRegistry.query({
      property_id: $localStorage.property_id
    });
    vm.checklistsRegistries.$promise.then(function(){
      $log.log(vm.checklistsRegistries);
      angular.forEach(vm.checklistsRegistries, function(value, key) {
        $log.log(value);
        value.total_ok = $filter('filter')(value.checklist_entries, {response:1}).length;
      });
    });
  });
