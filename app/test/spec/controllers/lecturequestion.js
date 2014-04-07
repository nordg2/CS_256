'use strict';

describe('Controller: LecturequestionCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var LecturequestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LecturequestionCtrl = $controller('LecturequestionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
