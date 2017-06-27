'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:PropertyCtrl
 * @description
 * # PropertyCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('PropertyCtrl', function (Property, $localStorage, $filter, $state) {
    var vm = this;
    vm.change = change;
    vm.property_id = $localStorage.property_id;
    vm.properties = Property.query(function(data){
      if(data.length > 0){
        vm.property = $filter('filter')(data, {'id':vm.property_id}, true)[0];
      }
    });
    ////////////
    function change(property){
      vm.property = property;
      $localStorage.property_id = vm.property.id;
      $state.reload();
    }
  });
