app.controller('pontoCtrl', function($scope, $rootScope, $location, PontoService, $routeParams, $filter){

    if($rootScope.empresaAtiva.id < 1){
        $location.path('login');
        return;
    }

    $scope.empresaAtiva = $rootScope.empresaAtiva;
    $scope.ponto = [];

    var promise = PontoService.select($routeParams.id);
    promise.then(function(response){
        $scope.ponto = response.data[0];
        
        if($scope.ponto.idEmpresa != $scope.empresaAtiva.id){
            $location.path('home');
            return;
        }
        
    }, function(error){
        Materialize.toast('Erro de conexão com o banco', 4000);
    });
	
});
