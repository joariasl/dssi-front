'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:PropertyCtrl
 * @description
 * # PropertyCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('PropertyCtrl', function (Property) {
    var vm = this;
    vm.property_selected;
    // vm.property = [
    //   {
    //     id: 1,
    //     name: 'Casino 1',
    //   },
    //   {
    //     id: 2,
    //     name: 'Casino 2',
    //   },
    //   {
    //     id: 3,
    //     name: 'Casino 3',
    //   }
    // ];
    vm.property = Property.query(function(data){
      if(data.length > 0){
        vm.property_selected = data[0];
      }
    });
    ////////////
    function change(){
    }
  });
