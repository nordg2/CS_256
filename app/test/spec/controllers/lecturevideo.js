'use strict';

describe('Controller: LecturevideoCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var LecturevideoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LecturevideoCtrl = $controller('LecturevideoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
