'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ModalDefaultCtrl
 * @description
 * # ModalDefaultCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ModalDefaultCtrl', function ($scope, $uibModalInstance, options) {
    $scope.modal_options = options;

    $scope.close = function(){
      $uibModalInstance.close();
    };
  });
