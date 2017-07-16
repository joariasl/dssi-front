'use strict';

/**
 * @ngdoc overview
 * @name dssiFrontApp
 * @description
 * # dssiFrontApp
 *
 * Main module of the application.
 */
angular
  .module('dssiFrontApp')
  .run(function($rootScope, Auth, PermPermissionStore, $urlRouter, $q){
    $rootScope.appReady = false;

    var promise1 = Auth.getUser().then(function(result){
      $rootScope.authenticate_user = result.data;
    }, function(result){
      $timeout(function() {
        $window.location.href = "login.html";
      });
    });
    // Get permissions inside
    var promise2 = Auth.getPermissions().then(function(result){
      $rootScope.user_permissions = result.data;
      PermPermissionStore.defineManyPermissions($rootScope.user_permissions, function (permissionName) {
        return $rootScope.user_permissions.indexOf(permissionName) !== -1;
      });
    });
    $q.all([promise1, promise2]).then(function(data){
      $rootScope.appReady = true;
      $urlRouter.sync();
      $urlRouter.listen();
    });
  });
