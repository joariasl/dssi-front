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
    'ncy-angular-breadcrumb'
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
        controllerAs: 'checklist',
        ncyBreadcrumb: {
          label: 'Checklist'
        }
      })
      .state('checklist.registry', {
        url: '/registry',
        templateUrl: 'views/checklist/registry.html',
        controller: 'ChecklistRegistryCtrl',
        controllerAs: 'checklistRegistry',
        ncyBreadcrumb: {
          label: 'Registrar'
        }
      })
      .state('checklist.view', {
        url: '/view',
        templateUrl: 'views/checklist/view.html',
        controller: 'ChecklistViewCtrl',
        controllerAs: 'checklistView',
        ncyBreadcrumb: {
          label: 'Buscar'
        }
      })
      .state('checklist.admin', {
        url: '/admin',
        templateUrl: 'views/checklist/admin.html',
        controller: 'ChecklistAdminCtrl',
        controllerAs: 'checklistAdmin',
        ncyBreadcrumb: {
          label: 'Administrar'
        }
      })
      //Visitas
      .state('visits', {
        abstract: true,
        url: '/visits',
        templateUrl: 'views/visits/visits.html',
        controller: 'VisitsCtrl',
        controllerAs: 'visits',
        ncyBreadcrumb: {
          label: 'Visitas'
        }
      })
      .state('visits.view', {
        url: '/view',
        templateUrl: 'views/visits/view.html',
        controller: 'VisitsViewCtrl',
        controllerAs: 'visitsView',
        ncyBreadcrumb: {
          label: 'Buscar'
        }
      })
      .state('visits.checkin', {
        url: '/checkin',
        templateUrl: 'views/visits/checkin.html',
        controller: 'VisitsCheckinCtrl',
        controllerAs: 'visitsCheckin',
        ncyBreadcrumb: {
          label: 'Check-In'
        }
      })
      .state('visits.checkout', {
        url: '/checkout',
        templateUrl: 'views/visits/checkout.html',
        controller: 'VisitsCheckoutCtrl',
        controllerAs: 'visitsCheckout',
        ncyBreadcrumb: {
          label: 'Check-Out'
        }
      })
      //Llaves
      .state('keys', {
        abstract: true,
        url: '/keys',
        templateUrl: 'views/keys/keys.html',
        controller: 'KeysCtrl',
        controllerAs: 'keys',
        ncyBreadcrumb: {
          label: 'Llaves'
        }
      })
      .state('keys.delivery', {
        url: '/delivery',
        templateUrl: 'views/keys/delivery.html',
        controller: 'KeysDeliveryCtrl',
        controllerAs: 'keysDelivery',
        ncyBreadcrumb: {
          label: 'Entrega'
        }
      })
      .state('keys.return', {
        url: '/return',
        templateUrl: 'views/keys/return.html',
        controller: 'KeysReturnCtrl',
        controllerAs: 'keysReturn',
        ncyBreadcrumb: {
          label: 'Devolución'
        }
      })
      .state('keys.view', {
        url: '/view',
        templateUrl: 'views/keys/view.html',
        controller: 'KeysViewCtrl',
        controllerAs: 'keysView',
        ncyBreadcrumb: {
          label: 'Buscar'
        }
      });
  })
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
          if (["token_expired", "token_invalid", "token_not_provided"].indexOf(response.data.error) !== -1) {
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
      template: `
      <ol class="breadcrumb">
        <li ng-repeat="step in steps | limitTo:(steps.length-1)" style="vertical-align: middle;">
          <h2 ng-if="$first">
            <a href="{{step.ncyBreadcrumbLink}}" ng-bind-html="step.ncyBreadcrumbLabel"></a>
          </h2>
          <a ng-if="!$first" href="{{step.ncyBreadcrumbLink}}" ng-bind-html="step.ncyBreadcrumbLabel"></a>
        </li>
        <li ng-repeat="step in steps | limitTo:-1" class="active" style="vertical-align: middle;">
          <span ng-bind-html="step.ncyBreadcrumbLabel"></span>
        </li>
      </ol>
      `
    });
  });
