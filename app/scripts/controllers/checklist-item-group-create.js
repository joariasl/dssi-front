'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistItemGroupCreateCtrl
 * @description
 * # ChecklistItemGroupCreateCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistItemGroupCreateCtrl', function ($scope, ChecklistItemGroup, $uibModal, notificationService) {
    var vm = this;

    // Set scope to modal
    $scope = $scope.$parent || $scope;

    vm.checklistItemGroup = new ChecklistItemGroup({
      name: null,
      checklist_id: $scope.$parent.checklist.id || null
    });

    // Replace method from parent ModalDefaultCtrl
    var parentClose = $scope.close;
    $scope.ok = ok;
    $scope.formSubmit = formSubmit;

    ////////////

    function saveChecklistItemGroup(checklistItemGroup){
      checklistItemGroup.$save().then(function(){
        notificationService.success('¡Guardado!');
        parentClose();
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });
    }

    function ok(){
      saveChecklistItemGroup(vm.checklistItem);
    }

    function formSubmit(){
      saveChecklistItemGroup(vm.checklistItemGroup);
    }
  });
