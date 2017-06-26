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
    signin: signin,
    logout: logout
  };
  return service;

  ////////////

  function signin(data, success, error) {
    // $http.post(urls.BASE_URL + '/authenticate', data).success(success).error(error);
    $http({
      method  : 'POST',
      url     : urls.BASE_URL + '/authenticate',
      data    : data, // pass in data as strings
    }).then(function(result){
      var data = result.data;
      $localStorage.token = data.token;
      success && success(result);
    }, error);
  }

  function logout(success) {
    $http.post(urls.BASE_URL + '/invalidate').then(function(result){
      invalidate();
      success && success(result);
    });
    return false;
  }

  function invalidate(){
    delete $localStorage.token;
  }
}
