app.controller('clienteCtrl', function ($scope, $rootScope, $location, RelatorioService, PontoService, $routeParams, $filter) {

    $scope.cliente = [];
    $scope.pontosCliente = [];
    $scope.carrinhoPontos = [];

    $scope.valorTotalPontos = 0;

    var valorTotalPontosC = 0;

    var promise = RelatorioService.carregarClienteSelecionado($routeParams.id);
    promise.then(function (response) {
        $scope.cliente = response.data;
    }, function (error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    var promise = RelatorioService.carregarPontosCliente($routeParams.id);
    promise.then(function (response) {
        $scope.pontosCliente = response.data;
        console.log($scope.pontosCliente);
    }, function (error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    $scope.existInCarrinho = function (id) {
        for (var i = 0; i < $scope.carrinhoPontos.length; i++) {
            if ($scope.carrinhoPontos[i].id == id) {
                return true;
            }
        }
        return false;
    }

    $scope.addCarrinhoPontos = function (idPonto) {

        var promise = PontoService.select(idPonto);
        promise.then(function (response) {
            $scope.carrinhoPontos.push(response.data[0]);

            var valor = 0;
            valorTotalPontosC = 0;
            for (var i = 0; i < $scope.carrinhoPontos.length; i++) {

                valor = $scope.carrinhoPontos[i].valor;
                valorTotalPontosC = valorTotalPontosC + parseFloat(valor);
                $scope.valorTotalPontos = valorTotalPontosC;
            }

        }, function (error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });

    }

    $scope.remCarrinhoPontos = function (idPonto) {

        var promise = PontoService.select(idPonto);
        promise.then(function (response) {
            var index = $scope.carrinhoPontos.indexOf(idPonto);

            for (var i = 0; i < $scope.carrinhoPontos.length; i++) {
                if ($scope.carrinhoPontos[i].id == idPonto) {
                    var valor = $scope.carrinhoPontos[i].valor;
                    valorTotalPontosC -= parseFloat(valor);
                    $scope.valorTotalPontos = valorTotalPontosC;
                    $scope.carrinhoPontos.splice(index, 1);
                }
            }

        }, function (error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });

    }

    $scope.openModal = function () {        
        $scope.valorTotalPontos = valorTotalPontosC;
    }

    $scope.descontarPontos = function () {

        if($scope.carrinhoPontos.length == 0){
            Materialize.toast('Cliente não tem desconto <br>disponível', 4000);
            return;
        } else {

            for (var i = 0; i < $scope.carrinhoPontos.length; i++) {            
                var promise = PontoService.desativarPontoPego($scope.carrinhoPontos[i].id, $scope.cliente[0].id);
                promise.then(function (response) {
                    
                    if(response.data == 'true'){
                        Materialize.toast('Desconto utilizado com sucesso', 4000);
                        $location.path('home');
                    } else {
                        Materialize.toast('Erro ao utilizar desconto', 4000);
                    }

                }, function (error) {
                    Materialize.toast('Erro de conexão com o banco', 4000);
                });
            }
        }

    }

});
