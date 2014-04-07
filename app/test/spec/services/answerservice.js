'use strict';

describe('Service: Answerservice', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var Answerservice;
  beforeEach(inject(function (_Answerservice_) {
    Answerservice = _Answerservice_;
  }));

  it('should do something', function () {
    expect(!!Answerservice).toBe(true);
  });

});
