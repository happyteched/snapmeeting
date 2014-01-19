'use strict';

angular.module('snapmeetingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute','snapmeetingApp.controllers','snapmeetingApp.services'
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
