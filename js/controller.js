angular.module('assessment').controller('mainCtrl', function($scope, $stateParams, mainSrv) {

  $scope.getPets = function(){
    if (!$stateParams.id) {
      mainSrv.getPets().then(function(response) {
        $scope.pets = response.data;
      })
    }else{
      mainSrv.getPet($stateParams.id).then(function(response){
        $scope.pets = response.data;
      })
    }
  }
$scope.getPets();

})
