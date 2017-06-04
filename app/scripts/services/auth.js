'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Auth
 * @description
 * # Auth
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Auth', Auth);

Auth.$inject = ['$http', '$localStorage', 'urls'];
function Auth($http, $localStorage, urls) {
  var service = {
    signin: signin
  };
  return service;

  ////////////

  function signin(data, success, error) {
    console.log('Signin Data: ', data);
    // $http.post(urls.BASE_API + '/authenticate', data).success(success).error(error);
    $http({
      method  : 'POST',
      url     : urls.BASE_API + '/authenticate',
      data    : data, // pass in data as strings
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
}
