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
    someMethod: function () {
      return meaningOfLife;
    }
  };
  return service;

  ////////////

  function signin(data, success, error) {
    $http.post(urls.BASE_API + '/signin', data).success(success).error(error);
  }
}
