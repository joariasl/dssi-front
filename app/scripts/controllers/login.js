'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('LoginCtrl', function ($http, $state, $window, Auth) {
    var vm = this;
    vm.submit = submit;
    vm.formLogin = {
      username: '',
      password: ''
    };

    ///////////

    function submit(){
      var formData = vm.formLogin;
      Auth.signin(formData, loginSuccess, loginError);
    }

    function loginSuccess(result){
      vm.error = null;
      vm.success = 'Sesión iniciada';
      $window.location.href = "index.html";
    }

    function loginError(result){
      var error_messages = {
        'invalid_credentials': 'Credencial inválida'
      }
      var data = result.data;
      vm.success = null;
      vm.error = data ? error_messages[data.error] || data.error : ' ';
    }
  });
