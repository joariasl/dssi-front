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
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push(['$q', '$window', '$localStorage', function ($q, $window, $localStorage) {
      return {
        'request': function (config) {
          config.headers = config.headers || {};
          if ($localStorage.token) {
            config.headers.Authorization = 'Bearer ' + $localStorage.token;
          }
          return config;
        },
        'responseError': function (response) {
          if (response.status === 401 || response.status === 403) {
            delete $localStorage.token;
            $window.location.href = "login.html";
          }
          return $q.reject(response);
        }
      };
    }]);
  });
