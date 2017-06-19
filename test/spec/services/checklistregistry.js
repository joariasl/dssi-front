'use strict';

describe('Service: ChecklistRegistry', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var ChecklistRegistry;
  beforeEach(inject(function (_ChecklistRegistry_) {
    ChecklistRegistry = _ChecklistRegistry_;
  }));

  it('should do something', function () {
    expect(!!ChecklistRegistry).toBe(true);
  });

});
