'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistAdminCtrl
 * @description
 * # ChecklistAdminCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistAdminCtrl', function (ChecklistItemGroup, $localStorage) {
    var vm = this;
    vm.checklistItemGroups = ChecklistItemGroup.query({
      property_id: $localStorage.property_id
    });
  });
