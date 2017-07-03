'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistItemCreateCtrl
 * @description
 * # ChecklistItemCreateCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistItemCreateCtrl', function (ChecklistItem, $scope, ChecklistItemGroup, $localStorage, $uibModal, notificationService) {
    var vm = this;

    // Set scope to modal
    $scope = $scope.$parent || $scope;

    vm.checklistItem = new ChecklistItem({
      checklist_id: $scope.$parent.checklist.id || null,
      checklist_item_group_id: null,
      status: false
    });
    vm.checklistItemGroups = $scope.$parent.checklistItemGroups || ChecklistItemGroup.query({
      property_id: $localStorage.property_id
    });

    // Replace method from parent ModalDefaultCtrl
    var parentClose = $scope.close;
    $scope.ok = ok;
    $scope.formSubmit = formSubmit;

    ////////////

    function saveChecklistItem(checklistItem){
      checklistItem.$save().then(function(){
        notificationService.success('¡Guardado!');
        $scope.$parent.loadChecklistItems();
        parentClose();
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });
    }

    function ok(){
      saveChecklistItem(vm.checklistItem);
    }

    function formSubmit(){
      saveChecklistItem(vm.checklistItem);
    }
  });
