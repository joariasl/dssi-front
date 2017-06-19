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
    'angular-loading-bar'
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
      })
      .state('admin-user', {
        url: '/admin-user',
        templateUrl: 'views/admin-user.html',
        controller: 'AdminUserCtrl',
        controllerAs: 'adminUser'
      })
      //Checklist
      .state('checklist', {
        abstract: true,
        url: '/checklist',
        templateUrl: 'views/checklist/checklist.html',
        controller: 'ChecklistCtrl',
        controllerAs: 'checklist'
      })
      .state('checklist.register', {
        url: '/register',
        templateUrl: 'views/checklist/register.html',
        controller: 'ChecklistRegisterCtrl',
        controllerAs: 'checklistRegister'
      })
      .state('checklist.view', {
        url: '/view',
        templateUrl: 'views/checklist/view.html',
        controller: 'ChecklistViewCtrl',
        controllerAs: 'checklistView'
      })
      .state('checklist.admin', {
        url: '/admin',
        templateUrl: 'views/checklist/admin.html',
        controller: 'ChecklistAdminCtrl',
        controllerAs: 'checklistAdmin'
      })
      //Visitas
      .state('visits', {
        abstract: true,
        url: '/visits',
        templateUrl: 'views/visits/visits.html',
        controller: 'VisitsCtrl',
        controllerAs: 'visits'
      })
      .state('visits.view', {
        url: '/view',
        templateUrl: 'views/visits/view.html',
        controller: 'VisitsViewCtrl',
        controllerAs: 'visitsView'
      })
      .state('visits.checkin', {
        url: '/checkin',
        templateUrl: 'views/visits/checkin.html',
        controller: 'VisitsCheckinCtrl',
        controllerAs: 'visitsCheckin'
      })
      .state('visits.checkout', {
        url: '/checkout',
        templateUrl: 'views/visits/checkout.html',
        controller: 'VisitsCheckoutCtrl',
        controllerAs: 'visitsCheckout'
      })
      //Llaves
      .state('keys', {
        abstract: true,
        url: '/keys',
        templateUrl: 'views/keys/keys.html',
        controller: 'KeysCtrl',
        controllerAs: 'keys'
      })
      .state('keys.delivery', {
        url: '/delivery',
        templateUrl: 'views/keys/delivery.html',
        controller: 'KeysDeliveryCtrl',
        controllerAs: 'keysDelivery'
      })
      .state('keys.return', {
        url: '/return',
        templateUrl: 'views/keys/return.html',
        controller: 'KeysReturnCtrl',
        controllerAs: 'keysReturn'
      })
      .state('keys.view', {
        url: '/view',
        templateUrl: 'views/keys/view.html',
        controller: 'KeysViewCtrl',
        controllerAs: 'keysView'
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
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;
  }]);
