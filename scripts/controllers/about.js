'use strict';

angular.module('myApp1')
  .controller('AboutCtrl', function ($scope, myService) {
    $scope.awesomeThings = myService.myquery();
  });
