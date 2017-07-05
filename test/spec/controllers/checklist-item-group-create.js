'use strict';

describe('Controller: ChecklistItemGroupCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('dssiFrontApp'));

  var ChecklistItemGroupCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChecklistItemGroupCreateCtrl = $controller('ChecklistItemGroupCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
