'use strict';

describe('Service: ChecklistItem', function () {

  // load the service's module
  beforeEach(module('dssiFrontApp'));

  // instantiate service
  var ChecklistItem;
  beforeEach(inject(function (_ChecklistItem_) {
    ChecklistItem = _ChecklistItem_;
  }));

  it('should do something', function () {
    expect(!!ChecklistItem).toBe(true);
  });

});
