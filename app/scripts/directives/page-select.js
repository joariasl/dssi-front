'use strict';

/**
 * @ngdoc directive
 * @name dssiFrontApp.directive:pageSelect
 * @description
 * # pageSelect
 */
angular.module('dssiFrontApp')
  .directive('pageSelect', function () {
    return {
      template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watch('currentPage', function(c) {
          scope.inputPage = c;
        });
      }
    };
  });
