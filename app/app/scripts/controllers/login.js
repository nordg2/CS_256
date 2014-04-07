'use strict';

angular.module('appApp')
  .controller('LoginCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submitform = function(){
        $location.path("/registration");
    }
  });
