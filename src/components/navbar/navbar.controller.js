'use strict';

angular.module('hw3')
  .controller('navbarCtrl', ['$rootScope', '$scope', 'authServ',
    function ($rootScope, $scope, authServ) {
      $scope.hide = true;
      $scope.admin = false;

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        //Hide navbar when go to login page
        $scope.hide = (toState.url === '/');

        //Show 'admin' ref when admin logged in
        $scope.admin = authServ.isAdmin();
      });
    }]);
