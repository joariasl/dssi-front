'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:PropertyCtrl
 * @description
 * # PropertyCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('PropertyCtrl', function (Property, $localStorage, $filter, $state, $rootScope) {
    var vm = this;
    vm.change = change;
    vm.property_id = $localStorage.property_id;
    vm.properties = Property.query(function(data){
      autoSelectFirst(data);
      vm.property = findProperty(vm.property_id, data);
    });
    ////////////
    function change(property){
      vm.property = property;
      $localStorage.property_id = vm.property.id;
      $rootScope.property_id = $localStorage.property_id;
      $state.reload();
    }

    function autoSelectFirst(properties){
      if(!vm.property_id){
        change(properties[0]);
      }
    }

    function findProperty(property_id, properties){
      return $filter('filter')(properties, {'id':property_id}, true)[0];
    }
  });
