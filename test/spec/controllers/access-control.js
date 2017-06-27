'use strict';

describe('Controller: AccessControlCtrl', function () {

  // load the controller's module
  beforeEach(module('dssiFrontApp'));

  var AccessControlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccessControlCtrl = $controller('AccessControlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
