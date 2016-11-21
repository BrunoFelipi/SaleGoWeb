app.controller('homeCtrl', function($scope, $rootScope, $location, PontoService){

    /* COMENTAR PARA TESTE
        if($rootScope.empresa.id < 1){
            $location.path('login');
            return;
        }
    */


  $scope.empresa = $rootScope.empresa;

  $scope.pontos = [];

  var getPontos = PontoService.selectAll($scope.empresa.id);
  getPontos.then(function(response){
      $scope.pontos = response.data;
      console.log($scope.pontos);
  }, function(error){

  });

});
