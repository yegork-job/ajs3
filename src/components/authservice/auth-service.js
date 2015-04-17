'use strict';

angular.module('hw3')
  .factory('authServ', ['$window', function ($window) {
    return {
      authorized: function () {
        return !!$window.localStorage.getItem('username');
      },

      login: function (userName) {
        $window.localStorage.setItem('username', userName);
      },

      logout: function () {
        $window.localStorage.setItem('username', '');
      },

      isAdmin: function () {
        return $window.localStorage.getItem('username') === 'admin';
      }
    };
  }]);