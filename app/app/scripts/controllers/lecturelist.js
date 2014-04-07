'use strict';

angular.module('appApp')
  .controller('LecturelistCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.lectures = [
      {
        "title":"Chromosomes and Us"
      },
      {
        "title":"What is Biology"
      },
      {
        "title":"Pictures and Graphs"
      },
      {
        "title":"Great People"
      }
    ];
    $scope.popular = [
      {
        "title":"Inroduction",
        "viewers": 115
      },
      {
        "title":"Anantomy",
        "viewers": 5
      },
      {
        "title":"Snack Time",
        "viewers": 3
      }
    ];
    $scope.gotoLecture = function(){
        $location.path("/lecturevideo");
    }
  });
