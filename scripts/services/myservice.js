'use strict';

angular.module('myApp1').service('myService', function ($resource) {
    this.myquery = function() { 
        return $resource('data/awesome-things.json').query(); 
    };


  });
