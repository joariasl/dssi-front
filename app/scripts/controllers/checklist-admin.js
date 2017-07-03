'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistAdminCtrl
 * @description
 * # ChecklistAdminCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistAdminCtrl', function ($scope, ChecklistItemGroup, Checklist, ChecklistItem, $localStorage, $uibModal, $log) {
    var vm = this;
    this.checklistItemCreate = checklistItemCreate;

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
        vm.checklist.checklist_items = vm.checklist.checklist_items;
      });
    }

    function loadChecklistItemGroups(){
      vm.checklistItemGroups = ChecklistItemGroup.query({
        property_id: $localStorage.property_id
      });
      $scope.checklistItemGroups = vm.checklistItemGroups;
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
            ok_text: 'Guardar'
          }
        }
      }).result.finally(function() {

      });
    }
  });
