angular.module('assessment').directive('petsDir', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/pet-tmpl.html',
    scope:{
      product: '=',
    },
    link: function (scope, element, attributes) {
      scope.getPets.then(function (response) {
        scope.pets = response.data;
      })
    },
    controller: function($scope, mainSrv) {
      $scope.getPets = mainSrv.getPets();
    }
  }
})
