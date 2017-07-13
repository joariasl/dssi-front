'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyCreateCtrl
 * @description
 * # KeyCreateCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyCreateCtrl', function ($scope, Key, $uibModal, notificationService, $localStorage) {
    var vm = this;

    // Set scope to modal
    //$scope = $scope.$parent || $scope;

    vm.newKey = new Key({
      code: null,
      property_id: $localStorage.property_id,
      key_condition_id: 1
    });

    // Replace method from parent ModalDefaultCtrl
    var parentClose = $scope.close;
    $scope.ok = ok;
    $scope.formSubmit = formSubmit;

    ////////////

    function saveNewKey(newKey){
      newKey.$save().then(function(){
        notificationService.success('¡Guardado!');
        parentClose();
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });
    }

    function ok(){
      saveKey(vm.key);
    }

    function formSubmit(){
      saveNewKey(vm.newKey);
    }
  });
