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
  .module('dssiFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.bootstrap',
    'angular-loading-bar',
    'ncy-angular-breadcrumb',
    'angularMoment',
    'angular-bind-html-compile',
    'jlareau.pnotify',
    'smart-table',
    'permission', 'permission.ui'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push(['$q', '$window', '$localStorage', function ($q, $window, $localStorage) {
      function redirectToLogin() {
        $window.location.href = "login.html";
      }
      return {
        'request': function (config) {
          config.headers = config.headers || {};
          if ($localStorage.token) {
            config.headers.Authorization = 'Bearer ' + $localStorage.token;
          } else {
            redirectToLogin();
          }
          return config;
        },
        'responseError': function (response) {
          //if (response.status === 401 || response.status === 403) {
          if (response.data && ["token_expired", "token_invalid", "token_not_provided"].indexOf(response.data.error) !== -1) {
            delete $localStorage.token;
            redirectToLogin();
          }
          return $q.reject(response);
        }
      };
    }]);
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;
  }])
  .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      template: 'bootstrap3',
      includeAbstract: true,
      templateUrl: 'views/breadcrumb.html'
    });
  });
