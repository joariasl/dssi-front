'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyAdminCtrl
 * @description
 * # KeyAdminCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyAdminCtrl', function ($scope, Key, KeyCondition, $localStorage, $uibModal, notificationService, $log) {
    var vm = this;
    vm.updateKeyConditionItem = updateKeyConditionItem;
    vm.keyCreate = keyCreate;
    vm.loadKeys = loadKeys;

    loadKeyConditions();

    ////////////

    function loadKeys(tableState){
      vm.tableStateKeys = tableState;
      var pagination = tableState.pagination;
      var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
      var number = pagination.number || 15;  // Number of entries showed per page.
      var search = tableState.search.predicateObject;
      var sort = tableState.sort;

      vm.keys = Key.query({
        property_id: $localStorage.property_id,
        // smart-table params
        page: 1 + Math.floor(start/number),
        search: search,
        sort: {
          field: sort.predicate,
          direction: (sort.reverse?'desc':'asc')
        }
      }, function(result, headers){
        tableState.pagination.numberOfPages = 1 + Math.floor(headers('total')/headers('per_page'));
      });
    }

    function reloadKeys(){
      loadKeys(vm.tableStateKeys);
    }

    function loadKeyConditions(){
      vm.keyConditions = KeyCondition.query({
        property_id: $localStorage.property_id
      });
      $scope.keyConditions = vm.keyConditions;
      $log.log(vm.keyConditions);
    }

    function updateKeyConditionItem(keyConditionItem){
      delete keyConditionItem.key_condition;
      KeyConditionItem.update({id: keyConditionItem.id}, keyConditionItem).$promise.then(function(){
        notificationService.success('¡Actualizado!');
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });
    }

    function keyCreate(){
      $uibModal.open({
        animation: true,
        templateUrl: 'views/modal-bind-compile.html',
        size: 'md',
        controller: 'ModalDefaultCtrl',
        controllerAs: 'modal',
        scope: $scope,// This $scope as parent of child element
        resolve: {
          options: {
            title: 'Crear nueva Llave',
            content: '<div ng-controller="KeyCreateCtrl as keyCreate" ng-include="\'views/access-control/key/create.html\'"></div>',
            without_footer: true
          }
        }
      }).result.finally(function() {
        reloadKeys();
      });
    }

  });
