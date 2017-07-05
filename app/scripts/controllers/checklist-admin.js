'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistAdminCtrl
 * @description
 * # ChecklistAdminCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistAdminCtrl', function ($scope, ChecklistItemGroup, Checklist, ChecklistItem, $localStorage, $uibModal, notificationService, $log) {
    var vm = this;
    vm.checklistItemCreate = checklistItemCreate;
    vm.checklistItemGroupCreate = checklistItemGroupCreate;
    vm.updateChecklistItem = updateChecklistItem;

    vm.checklistItemGroups = []
    loadChecklistItemGroups();

    vm.checklist = {};
    loadChecklist();
    $scope.loadChecklist = vm.loadChecklist;

    $scope.loadChecklistItems = loadChecklistItems;

    ////////////

    function loadChecklist(){
      vm.checklist = Checklist.get({
        property_id: $localStorage.property_id
      });
      $scope.checklist = vm.checklist;
      vm.checklist.$promise.then(function(){
        vm.checklistItems = vm.checklist.checklist_items;
      });
    }

    function loadChecklistItems(){
      vm.checklistItems = ChecklistItem.query({
        checklist_id: vm.checklist.id
      });
      vm.checklistItems.$promise.then(function(){
        vm.checklist.checklist_items = vm.checklistItems;
      });
    }

    function loadChecklistItemGroups(){
      vm.checklistItemGroups = ChecklistItemGroup.query({
        property_id: $localStorage.property_id
      });
      $scope.checklistItemGroups = vm.checklistItemGroups;
    }

    function updateChecklistItem(checklistItem){
      delete checklistItem.checklist_item_group;
      ChecklistItem.update({id: checklistItem.id}, checklistItem).$promise.then(function(){
        notificationService.success('¡Actualizado!');
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });
    }

    function checklistItemCreate(){
      $uibModal.open({
        animation: true,
        templateUrl: 'views/modal-bind-compile.html',
        size: 'md',
        controller: 'ModalDefaultCtrl',
        controllerAs: 'modal',
        scope: $scope,// This $scope as parent of child element
        resolve: {
          options: {
            title: 'Crear Item para Checklist',
            content: '<div ng-controller="ChecklistItemCreateCtrl as checklistItemCreate" ng-include="\'views/access-control/checklist-items/create.html\'"></div>',
            //ok_text: 'Guardar',
            without_footer: true
          }
        }
      }).result.finally(function() {
        loadChecklistItems();
      });
    }

    function checklistItemGroupCreate(){
      $uibModal.open({
        animation: true,
        templateUrl: 'views/modal-bind-compile.html',
        size: 'md',
        controller: 'ModalDefaultCtrl',
        controllerAs: 'modal',
        scope: $scope,// This $scope as parent of child element
        resolve: {
          options: {
            title: 'Crear Grupo para Item de Checklist',
            content: '<div ng-controller="ChecklistItemGroupCreateCtrl as checklistItemGroupCreate" ng-include="\'views/access-control/checklist-item-groups/create.html\'"></div>',
            without_footer: true
          }
        }
      }).result.finally(function() {
        loadChecklistItemGroups();
        loadChecklistItems();
      });
    }
  });
