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

    loadKeys();

    loadKeyConditions();

    ////////////

    function loadKeys(){
      vm.keys = Key.query({
        property_id: $localStorage.property_id
      });
    }

    function loadKeyConditions(){
      vm.keyConditions = KeyCondition.query({
        property_id: $localStorage.property_id
      });
      $scope.keyConditions = vm.keyConditions;
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
        loadKeys();
      });
    }

  });
