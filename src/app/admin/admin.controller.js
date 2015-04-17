'use strict';

angular.module('hw3')
  .controller('adminCtrl', function () {})

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('admin',
        {
          url: '/admin',
          templateUrl: 'app/admin/admin.html',
          controller: 'adminCtrl',
          resolve: {
            isLogged: ['$state', '$q', 'authServ', '$timeout',
              function ($state, $q, authServ, $timeout) {

                if (!authServ.authorized()) {
                  $timeout(function () {
                    $state.go('login');
                  }, 0);
                  return $q.reject('Unauthorized!');
                } else {

                  if (!authServ.isAdmin()) {
                    $timeout(function () {
                      $state.go('login', {action: 'logout'});
                    }, 0);
                    return $q.reject('Access denied');
                  }
                }
              }]
          }
        });

    }]);
