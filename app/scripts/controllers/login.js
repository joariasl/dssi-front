'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('LoginCtrl', function ($http, $state) {
    var vm = this;
    vm.submit = submit;
    vm.formLogin = {
      username: '',
      password: ''
    };

    ///////////

    function submit(){
      var formData = vm.formLogin;
      console.log('Form Data: ', formData);
      var sendData = '';
      angular.forEach(formData, function(value, key){
        if(!!sendData){
          sendData += '&';
        }
        sendData += key+'='+value;
      });

      $http({
        method  : 'POST',
        url     : '/Token',
        data    : sendData,  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      }).then(
        function(result) {
          var data = result.data;
            console.log('Datos NO error: ', data);
          // If not return error
          if (!data.error) {
            //$localStorage.token = res.token;
            $state.go('/');
          }
        },
        function(result){
          var data = result.data;
            console.log('Datos error: ', data);
          if(data.error){
            vm.loginError = true;
            vm.error = data.error;
            vm.errorText = data.error_description;
          }
        }
      );
    }
  });
