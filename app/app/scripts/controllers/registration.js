'use strict';

angular.module('appApp')
  .controller('RegistrationCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.submit = function(){
            $location.path("/lecturelist");
        }
  });
