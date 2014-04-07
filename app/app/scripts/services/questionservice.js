'use strict';

angular.module('appApp')
  .service('Questionservice', function Questionservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var questions = [
        {
            "question":"What is your question?"
        }
    ];
    this.getQuestions = function(){
      return questions;
    }
    this.temporaryInput = "";

    this.getTempInput = function(){
        return this.temporaryInput;
    }
    this.addQuestion = function(newquestion){
      questions.push(
          {
              "question":newquestion
          }
      );
    }
  });
