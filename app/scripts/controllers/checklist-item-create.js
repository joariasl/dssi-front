'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistItemCreateCtrl
 * @description
 * # ChecklistItemCreateCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistItemCreateCtrl', function (ChecklistItem, $log, $scope, ChecklistItemGroup, $localStorage) {
    var vm = this;

    // Set scope to modal
    $scope = $scope.$parent || $scope;
    $log.log($scope.$parent.checklist);

    vm.checklistItem = new ChecklistItem({
      checklist_id: $scope.$parent.checklist.id || null
    });
    vm.checklistItemGroups = $scope.$parent.checklistItemGroups || ChecklistItemGroup.query({
      property_id: $localStorage.property_id
    });

    // Replace method from parent ModalDefaultCtrl
    var parentClose = $scope.close;
    $scope.close = close;

    ////////////

    function close (){
      vm.checklistItem.$save().then(function(){
        $scope.$parent.loadChecklistItems();
        parentClose();
      });
    }
  });
