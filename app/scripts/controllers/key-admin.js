'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:KeyAdminCtrl
 * @description
 * # KeyAdminCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('KeyAdminCtrl', function ($scope, Key, $localStorage, $uibModal, notificationService, $log) {
    var vm = this;

    vm.keyItems = Key.query({
      property_id: $localStorage.property_id
    });
  });
