'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:PropertyCtrl
 * @description
 * # PropertyCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('PropertyCtrl', function (Property, $localStorage, $filter, $rootScope) {
    var vm = this;
    vm.change = change;
    vm.propertyId = $localStorage.propertyId;
    vm.properties = Property.query(function(data){
      if(data.length > 0){
        vm.property = $filter('filter')(data, {'id':vm.propertyId}, true)[0];
        $rootScope.property = vm.property;
      }
    });
    ////////////
    function change(property){
      vm.property = property;
      $localStorage.propertyId = vm.property.id;
    }
  });
