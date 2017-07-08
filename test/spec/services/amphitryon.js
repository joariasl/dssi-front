'use strict';

describe('Service: Amphitryon', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var Amphitryon;
  beforeEach(inject(function (_Amphitryon_) {
    Amphitryon = _Amphitryon_;
  }));

  it('should do something', function () {
    expect(!!Amphitryon).toBe(true);
  });

});
