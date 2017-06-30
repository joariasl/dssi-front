'use strict';

describe('Controller: ChecklistRegistriesCtrl', function () {

  // load the controller's module
  beforeEach(module('dssiFrontApp'));

  var ChecklistRegistriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChecklistRegistriesCtrl = $controller('ChecklistRegistriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
