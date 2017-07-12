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

    vm.keyItems = Key.query({
      property_id: $localStorage.property_id
    });

    vm.keyConditions = KeyCondition.query({
      property_id: $localStorage.property_id
    });

    ////////////
    
    function updateKeyConditionItem(keyConditionItem){
      delete keyConditionItem.key_condition;
      KeyConditionItem.update({id: keyConditionItem.id}, keyConditionItem).$promise.then(function(){
        notificationService.success('¡Actualizado!');
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });
    }
  });
