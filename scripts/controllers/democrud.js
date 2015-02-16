'use strict';

angular.module('myApp1')
  .controller('DemoCrudCtrl', function ($scope, $resource, myService) {
    $scope.awesomeThings = $resource('http://localhost:8090/people').get();
    
  });


angular.module('myApp1')
  .controller('DemoCrudCtrlInsert', function ($scope, $http) {

    $scope.update = function() {
        alert('this is supe');
        $scope.awesomeThings = $http.post('http://localhost:8090/people',{"firstName":"Ganesh","lastName":"Ghag","email":"gan@meail.com","address":"Flower Valley","mobile":"9388838283","employeeId":"98337"});
      };
    
  });
