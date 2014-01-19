'use strict';

angular.module('snapmeetingApp')
    .controller('MainCtrl', function ($scope) {
        console.log('in the main controller');
        $scope.awesomeThings = [
            'HTML5 Boil',
            'AngularJS',
            'Karma'
          ];

      });