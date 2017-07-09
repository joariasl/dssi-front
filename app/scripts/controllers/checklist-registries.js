'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistriesCtrl
 * @description
 * # ChecklistRegistriesCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistriesCtrl', function (ChecklistRegistry, ChecklistItemGroup, $localStorage, Turns, $filter, $scope, $log) {
    var vm = this;
    vm.load = load;

    vm.checklistTurns = Turns.turns;

    ////////////

    function loadChecklistRegistries(tableState){
      $log.log(tableState);
      var pagination = tableState.pagination;
      var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
      var number = pagination.number || 10;  // Number of entries showed per page.

      vm.checklistsRegistries = ChecklistRegistry.query({
        property_id: $localStorage.property_id,
        page: 1 + Math.floor(start/number)
      }, function(result, headers){
        // tableState.pagination.numberOfPages = 1 + Math.floor(vm.checklistsRegistries.length/number);
        tableState.pagination.numberOfPages = 1 + Math.floor(headers('total')/headers('per_page'));
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
    }

    function load(tableState){
      if(!vm.checklistItemGroups || !vm.checklistItemGroups.$promise.$$state.status){
        vm.checklistItemGroups = ChecklistItemGroup.query({
          property_id: $localStorage.property_id
        });
        vm.checklistItemGroups.$promise.then(function(){
          loadChecklistRegistries(tableState);
        });
      }else{
        loadChecklistRegistries(tableState);
      }
    }
  });
