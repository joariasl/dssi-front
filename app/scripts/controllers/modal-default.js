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

    $scope.ok_text = options.ok_text;
    $scope.without_footer = options.without_footer || false;

    $scope.close = close;
    $scope.ok = angular.isFunction(options.ok)?options.ok:close;

    ////////////

    function close(){
      $uibModalInstance.close();
    }
  });
