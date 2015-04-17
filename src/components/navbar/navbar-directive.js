'use strict';

angular.module('hw3')
  .directive('navBar', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      scope: {},
      controller: 'navbarCtrl'
    };
  });