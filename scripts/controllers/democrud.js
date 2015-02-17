'use strict';

angular.module('myApp1')
  .controller('DemoCrudCtrl', function ($scope, $resource, myService) {
    $scope.awesomeThings = $resource('http://localhost:8090/people?size=100&sort=employeeId,desc').get();
    
  });


angular.module('myApp1')
  .controller('DemoCrudCtrlInsert', function ($scope, $http) {

    $scope.insertRow = function(person) {
        person.employeeId=new Date().getTime();
        console.log('this is from inside submitData with person='+person);
        $scope.awesomeThings = $http.post('http://localhost:8090/people',person);
        location.reload(true);
      };

    $scope.deleteRow = function(link) {
        console.log('this is from inside deleteRow with link='+link);
        $http.delete(link);
        location.reload(true);
    };

  });
