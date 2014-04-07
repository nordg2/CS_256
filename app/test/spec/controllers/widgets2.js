'use strict';

describe('Controller: Widgets2Ctrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var Widgets2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Widgets2Ctrl = $controller('Widgets2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
