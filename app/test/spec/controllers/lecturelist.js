'use strict';

describe('Controller: LecturelistCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var LecturelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LecturelistCtrl = $controller('LecturelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
