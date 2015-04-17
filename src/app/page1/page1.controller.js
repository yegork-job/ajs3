'use strict';

angular.module('hw3')
  .controller('page1Ctrl', function () {})

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('page1',
        {
          url: '/page1',
          templateUrl: 'app/page1/page1.html',
          controller: 'page1Ctrl',
          resolve: {
            isLogged: ['$state', '$q', 'authServ', '$timeout',
              function ($state, $q, authServ, $timeout) {
                if (!authServ.authorized()) {
                  $timeout(function () {
                    $state.go('login');
                  }, 0);
                  return $q.reject('Unauthorized!');
                }
              }]
          }
        });

    }]);
