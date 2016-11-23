app.controller('cadastrarPontoCtrl', function($scope, $rootScope, $route, $location, PontoService){

  	$scope.empresaAtiva = $rootScope.empresaAtiva;

	$scope.latitude = '-26.9166207';
	$scope.longitude = '-49.0717429';

    $scope.cadastrarPonto = function(ponto){

        if(ponto.tipoDesconto == null){
            Materialize.toast('Selecione um tipo', 4000);
            return;
        }

        if(ponto.dataValidade == null){
            Materialize.toast('Necessário preencher<br>Data de Validade', 4000);
            return;
        }

        var promise = PontoService.insert($scope.empresaAtiva.id, ponto);
        promise.then(function(response){
            if(response.data == 'true'){
                $route.reload();
                Materialize.toast('Ponto cadastrado com sucesso', 2000);
            } else {
                Materialize.toast('Erro ao cadastrar ponto', 2000);
            }
        }, function(error){
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }

    $scope.limparCampos = function(){
        $route.reload();
    }

});
