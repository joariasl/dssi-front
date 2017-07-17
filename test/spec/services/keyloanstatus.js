'use strict';

describe('Service: KeyLoanStatus', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var KeyLoanStatus;
  beforeEach(inject(function (_KeyLoanStatus_) {
    KeyLoanStatus = _KeyLoanStatus_;
  }));

  it('should do something', function () {
    expect(!!KeyLoanStatus).toBe(true);
  });

});
