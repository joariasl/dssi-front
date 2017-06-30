'use strict';

describe('Service: Turns', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var Turns;
  beforeEach(inject(function (_Turns_) {
    Turns = _Turns_;
  }));

  it('should do something', function () {
    expect(!!Turns).toBe(true);
  });

});
