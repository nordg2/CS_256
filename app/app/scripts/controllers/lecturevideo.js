'use strict';

angular.module('appApp')
  .controller('LecturevideoCtrl', function ($scope,$location,Questionservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.gotoQuestion = function(){
        $location.path("/lecturequestion");
    }
    $scope.questions = Questionservice.getQuestions();
    $scope.addNewQuestion = function(){
        Questionservice.temporaryInput = $scope.questionFilter;
        console.log(Questionservice.temporaryInput);
        $location.path("/newquestion");
    }
  });
