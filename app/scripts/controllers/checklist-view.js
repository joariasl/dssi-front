'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistViewCtrl
 * @description
 * # ChecklistViewCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistViewCtrl', function ($state, $stateParams, ChecklistRegistry, ChecklistItemGroup, $localStorage, Turns) {
    var vm = this;
    vm.checklistTurns = Turns.turns;
    vm.checklistsRegistry = ChecklistRegistry.get({
      id: $stateParams.id
    });
  });
