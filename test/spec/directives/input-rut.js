'use strict';

describe('Directive: inputRut', function () {

  // load the directive's module
  beforeEach(module('dssiFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<input-rut ng-model="rut"></input-rut>');
    element = $compile(element)(scope);
  }));
});
