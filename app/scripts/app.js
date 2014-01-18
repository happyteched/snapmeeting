'use strict';

angular.module('snapmeetingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/rooms', {
        templateUrl: 'views/rooms.html',
        controller: 'RoomsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
