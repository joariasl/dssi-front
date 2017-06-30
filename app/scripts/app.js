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
      .state('index', {
        url: '/',
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl',
        controllerAs: 'index'
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
      .state('access-control', {
        abstract: true,
        url: '/access-control',
        templateUrl: 'views/access-control.html',
        controller: 'AccessControlCtrl',
        controllerAs: 'accessControl',
        ncyBreadcrumb: {
          label: 'Control de Acceso',
          skip: true
        }
      })
        //Checklist
        .state('access-control.checklist', {
          abstract: true,
          url: '/checklist',
          templateUrl: 'views/access-control/checklist.html',
          controller: 'ChecklistCtrl',
          controllerAs: 'checklist',
          ncyBreadcrumb: {
            label: 'Checklist'
          }
        })
          .state('access-control.checklist.checklist-registries', {
            url: '/checklist-registries',
            templateUrl: 'views/access-control/checklist-registries/list.html',
            controller: 'ChecklistRegistriesCtrl',
            controllerAs: 'checklistRegistries',
            ncyBreadcrumb: {
              label: 'Buscar'
            }
          })
          .state('access-control.checklist.checklist-registry', {
            url: '/checklist-registries/{id}',
            templateUrl: 'views/access-control/checklist-registries/view.html',
            controller: 'ChecklistViewCtrl',
            controllerAs: 'checklistView',
            ncyBreadcrumb: {
              label: 'Registro',
              parent: 'access-control.checklist.checklist-registries'
            }
          })
          .state('access-control.checklist.checklist-registries.registry', {
            url: '/registry',
            templateUrl: 'views/access-control/checklist/registry.html',
            controller: 'ChecklistRegistryCtrl',
            controllerAs: 'checklistRegistry',
            ncyBreadcrumb: {
              label: 'Registrar'
            }
          })
          .state('access-control.checklist.admin', {
            url: '/admin',
            templateUrl: 'views/access-control/checklist/admin.html',
            controller: 'ChecklistAdminCtrl',
            controllerAs: 'checklistAdmin',
            ncyBreadcrumb: {
              label: 'Administrar'
            }
          })
        //Visitas
        .state('access-control.visits', {
          abstract: true,
          url: '/visits',
          templateUrl: 'views/access-control/visits.html',
          controller: 'VisitsCtrl',
          controllerAs: 'visits',
          ncyBreadcrumb: {
            label: 'Visitas'
          }
        })
          .state('access-control.visits.view', {
            url: '/view',
            templateUrl: 'views/access-control/visits/view.html',
            controller: 'VisitsViewCtrl',
            controllerAs: 'visitsView',
            ncyBreadcrumb: {
              label: 'Buscar'
            }
          })
          .state('access-control.visits.checkin', {
            url: '/checkin',
            templateUrl: 'views/access-control/visits/checkin.html',
            controller: 'VisitsCheckinCtrl',
            controllerAs: 'visitsCheckin',
            ncyBreadcrumb: {
              label: 'Check-In'
            }
          })
          .state('access-control.visits.checkout', {
            url: '/checkout',
            templateUrl: 'views/access-control/visits/checkout.html',
            controller: 'VisitsCheckoutCtrl',
            controllerAs: 'visitsCheckout',
            ncyBreadcrumb: {
              label: 'Check-Out'
            }
          })
        //Llaves
        .state('access-control.keys', {
          abstract: true,
          url: '/keys',
          templateUrl: 'views/access-control/keys.html',
          controller: 'KeysCtrl',
          controllerAs: 'keys',
          ncyBreadcrumb: {
            label: 'Llaves'
          }
        })
          .state('access-control.keys.view', {
            url: '/view',
            templateUrl: 'views/access-control/keys/view.html',
            controller: 'KeysViewCtrl',
            controllerAs: 'keysView',
            ncyBreadcrumb: {
              label: 'Buscar'
            }
          })
          .state('access-control.keys.delivery', {
            url: '/delivery',
            templateUrl: 'views/access-control/keys/delivery.html',
            controller: 'KeysDeliveryCtrl',
            controllerAs: 'keysDelivery',
            ncyBreadcrumb: {
              label: 'Entrega'
            }
          })
          .state('access-control.keys.return', {
            url: '/return',
            templateUrl: 'views/access-control/keys/return.html',
            controller: 'KeysReturnCtrl',
            controllerAs: 'keysReturn',
            ncyBreadcrumb: {
              label: 'Devolución'
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
