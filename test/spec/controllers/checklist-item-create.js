'use strict';

describe('Controller: ChecklistItemCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('dssiFrontApp'));

  var ChecklistItemCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChecklistItemCreateCtrl = $controller('ChecklistItemCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
