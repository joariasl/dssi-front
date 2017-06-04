'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('LoginCtrl', function ($http, $state, Auth) {
    var vm = this;
    vm.submit = submit;
    vm.formLogin = {
      username: '',
      password: ''
    };

    ///////////

    function submit(){
      var formData = vm.formLogin;
      formData.email = formData.username;
      Auth.signin(formData);
    }
  });
