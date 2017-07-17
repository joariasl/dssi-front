'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyCreateCtrl
 * @description
 * # KeyCreateCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyCreateCtrl', function ($scope, Key, $uibModal, notificationService, $localStorage, $log) {
    var vm = this;

    // Set scope to modal
    $scope = $scope.$parent || $scope;

    vm.key = new Key({
      code: null,
      property_id: $localStorage.property_id,
      key_condition_id: 1
    });

    vm.keyConditions = $scope.$parent.keyConditions || null;
    $log.log($scope.$parent);

    // Replace method from parent ModalDefaultCtrl
    var parentClose = $scope.close;
    $scope.ok = ok;
    $scope.formSubmit = formSubmit;

    ////////////

    function saveKey(key){
      key.$save().then(function(){
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
      saveKey(vm.key);
    }
  });
