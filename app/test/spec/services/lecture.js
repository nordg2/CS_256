'use strict';

describe('Service: Lecture', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var Lecture;
  beforeEach(inject(function (_Lecture_) {
    Lecture = _Lecture_;
  }));

  it('should do something', function () {
    expect(!!Lecture).toBe(true);
  });

});
