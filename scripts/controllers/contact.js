'use strict';

angular.module('myApp1')
  .controller('ContactCtrl', function ($scope, $resource, myService) {
    $scope.awesomeThings = $resource('data/data.json').get();
  });
