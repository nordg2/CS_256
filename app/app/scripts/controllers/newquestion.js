'use strict';

angular.module('appApp')
  .controller('NewquestionCtrl', function ($scope,$location,Questionservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.gotoVideo = function(){
        $location.path("/lecturevideo");
    }
    $scope.submitanswer = function(newanswer){
        Questionservice.addQuestion($scope.newquestion);
        $location.path("/lecturevideo");

    }
    $scope.newquestion = Questionservice.getTempInput();
    Questionservice.temporaryInput = "";
});
