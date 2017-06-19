'use strict';

describe('Service: ChecklistItemGroup', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var ChecklistItemGroup;
  beforeEach(inject(function (_ChecklistItemGroup_) {
    ChecklistItemGroup = _ChecklistItemGroup_;
  }));

  it('should do something', function () {
    expect(!!ChecklistItemGroup).toBe(true);
  });

});
