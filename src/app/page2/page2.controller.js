'use strict';

angular.module('hw3')
  .controller('page2Ctrl', function () {})

  .config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('page2',
        {
          url: '/page2',
          templateUrl: 'app/page2/page2.html',
          controller: 'page2Ctrl',
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
