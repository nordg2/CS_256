'use strict';

angular.module('appApp')
  .controller('LecturequestionCtrl', function ($scope,$location,Answerservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.answers = Answerservice.getAnswers();
    $scope.submitanswer = function(answer){
        Answerservice.addAnswer(answer);
        $scope.newanswer = "";
    }
    $scope.gotoVideo = function(){
        $location.path("/lecturevideo");
    }
  });
