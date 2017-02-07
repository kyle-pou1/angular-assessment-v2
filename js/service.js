angular.module('assessment').service('mainSrv', function($http) {
  this.getPets = function() {
    return $http({
        method: 'GET',
        url: 'https://practiceapi.devmounta.in/pets'
    })
  }
  this.getPet = function(petid) {
    return $http({
      method: 'GET',
      url:'https://practiceapi.devmounta.in/pets/' + petid
    })
  }
});
