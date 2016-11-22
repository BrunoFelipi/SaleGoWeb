app.controller('homeCtrl', function($scope, $rootScope, $location, PontoService){
/*
    if($rootScope.empresaAtiva.id < 1){
        $location.path('login');
        return;
    }
*/
    $scope.empresaAtiva = $rootScope.empresaAtiva;
    $scope.pontos = [];

    var promise = PontoService.selectAll(1);
    promise.then(function(response){
        $scope.pontos = response.data;
    }, function(error){
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    $scope.viewClienteGetPonto = function(idPonto){
        $location.path('ponto/' + idPonto);
    }

});
