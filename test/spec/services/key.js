'use strict';

describe('Service: Key', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var Key;
  beforeEach(inject(function (_Key_) {
    Key = _Key_;
  }));

  it('should do something', function () {
    expect(!!Key).toBe(true);
  });

});
