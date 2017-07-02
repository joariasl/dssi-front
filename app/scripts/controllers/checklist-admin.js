'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistAdminCtrl
 * @description
 * # ChecklistAdminCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistAdminCtrl', function (ChecklistItemGroup, Checklist, $localStorage, $log) {
    var vm = this;
    vm.checklistItemGroups = ChecklistItemGroup.query({
      property_id: $localStorage.property_id
    });
    vm.checklist = Checklist.get({
      property_id: $localStorage.property_id
    });
    vm.checklist.$promise.then(function(){
      $log.log(vm.checklist);
      vm.checklistItems = vm.checklist.checklist_items;
    });
  });
