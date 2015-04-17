'use strict';

angular.module('hw3', ['ui.router'])
  .controller('loginCtrl', ['$scope', '$state', 'authServ', '$timeout',
    function ($scope, $state, authServ, $timeout) {

      $scope.userName = '';

      $scope.login = function (userName) {
        authServ.login(userName);
        // Авторизация успешна
        if (authServ.authorized()) {
          $timeout(function () {
            $state.go('page1');
          }, 0);
        }
      };

    }])

  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login',
        {
          url: '/',
          templateUrl: 'app/login/login.html',
          controller: 'loginCtrl',
          params: {
            action: {value: 'no action'}
          },
          resolve: {
            isLogged: ['$state', '$stateParams', '$q', 'authServ', '$timeout',
              function ($state, $stateParams, $q, authServ, $timeout) {
                if($stateParams.action === 'logout') {
                  authServ.logout();
                } else {
                  if (authServ.authorized()) {
                    $timeout(function () {
                      $state.go('page1');
                    }, 0);
                    return $q.reject('Already logged in');
                  }
                }
              }]
          }
        });

      $urlRouterProvider.otherwise(function ($injector, $location) {
        $location.url('/');
      });

    }]);
