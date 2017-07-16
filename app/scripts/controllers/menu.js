'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('MenuCtrl', function (Module) {
    var vm = this;

    vm.menu = Module.query();
  });
