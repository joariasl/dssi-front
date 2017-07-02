'use strict';

describe('Service: checklist', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var checklist;
  beforeEach(inject(function (_checklist_) {
    checklist = _checklist_;
  }));

  it('should do something', function () {
    expect(!!checklist).toBe(true);
  });

});
