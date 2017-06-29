'use strict';

describe('Service: KeyLoan', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var KeyLoan;
  beforeEach(inject(function (_KeyLoan_) {
    KeyLoan = _KeyLoan_;
  }));

  it('should do something', function () {
    expect(!!KeyLoan).toBe(true);
  });

});
