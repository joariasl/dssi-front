'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('MainCtrl', function ($window, Auth) {
    var vm = this;
    vm.logout = logout;

    ////////////

    function logout(){
      Auth.logout(function(){
        $window.location.href = "login.html";
      });
    }
  });
