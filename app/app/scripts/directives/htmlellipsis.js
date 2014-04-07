'use strict';

angular.module('appApp')
  .directive('htmlEllipsis', function ($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $timeout(function() {
                    angular.element(element).dotdotdot();
                }, 0);

            }
        };
  });
