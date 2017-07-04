'use strict';

describe('Service: checklist', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var checklist;
  beforeEach(inject(function (_Checklist_) {
    checklist = _Checklist_;
  }));

  it('should do something', function () {
    expect(!!checklist).toBe(true);
  });

});
