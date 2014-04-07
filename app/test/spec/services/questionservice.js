'use strict';

describe('Service: Questionservice', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var Questionservice;
  beforeEach(inject(function (_Questionservice_) {
    Questionservice = _Questionservice_;
  }));

  it('should do something', function () {
    expect(!!Questionservice).toBe(true);
  });

});
