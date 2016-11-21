app.controller('homeCtrl', function($scope, $rootScope, $location, PontoService){

    /* COMENTAR PARA TESTE
        if($rootScope.empresa.id < 1){
            $location.path('login');
            return;
        }
    */


  $scope.empresa = $rootScope.empresa;

  $scope.pontos = [];

  var promise = PontoService.selectAll($scope.empresa.id);
  promise.then(function(response){
      console.log(response.data);
      $scope.pontos = response.data;
  }, function(error){

  });

});
