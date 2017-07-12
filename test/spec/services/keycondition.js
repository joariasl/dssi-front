'use strict';

describe('Service: KeyCondition', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var KeyCondition;
  beforeEach(inject(function (_KeyCondition_) {
    KeyCondition = _KeyCondition_;
  }));

  it('should do something', function () {
    expect(!!KeyCondition).toBe(true);
  });

});
