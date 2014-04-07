'use strict';

angular.module('appApp')
  .service('Answerservice', function Answerservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var answers = [
            {
                "answer":"This is an example answer and it could potentially be whatever you want it to be just for this assignment.",
                "user":"someusername",
                "score":"somescore"
            },
            {
                "answer":"This is an example answer and it could potentially be whatever you want it to be just for this assignment.",
                "user":"someusername",
                "score":"somescore"
            }
        ];
        this.getAnswers = function(){
            return answers;
        }

        this.addAnswer = function(newquestion){
            answers.push(
                {
                    "answer":newquestion,
                    "user":"someusername",
                    "score":"somescore"
                }
            );
        }
  });
