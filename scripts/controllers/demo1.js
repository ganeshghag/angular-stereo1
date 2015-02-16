'use strict';

angular.module('myApp1')
  .controller('Demo1Ctrl', function ($scope, $resource, myService) {
    $scope.awesomeThings = $resource('data/donationRequests.json').query();
    
  });
