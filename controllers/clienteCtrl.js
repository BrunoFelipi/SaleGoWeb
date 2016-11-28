app.controller('clienteCtrl', function ($scope, $rootScope, $location, RelatorioService, PontoService, $routeParams, $filter) {

    $scope.cliente = [];
    $scope.pontosCliente = [];
    $scope.carrinhoPontos = [];

    $scope.valorTotalPorcentagem = 0;
    $scope.valorTotalReais = 0;

    var promise = RelatorioService.carregarClienteSelecionado($routeParams.id);
    promise.then(function (response) {
        $scope.cliente = response.data;
    }, function (error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    var promise = RelatorioService.carregarPontosCliente($routeParams.id);
    promise.then(function (response) {
        $scope.pontosCliente = response.data;        
        $scope.getValorTotal();
    }, function (error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    $scope.getValorTotal = function () {

        for (var i = 0; i < $scope.pontosCliente.length; i++) {
            if ($scope.pontosCliente[i].tipoDesconto == 'R$') {
                $scope.valorTotalReais = parseFloat($scope.valorTotalReais) + parseFloat($scope.pontosCliente[i].qtdPontos);
            } else {
                $scope.valorTotalPorcentagem = parseFloat($scope.valorTotalPorcentagem) + parseFloat($scope.pontosCliente[i].valor);
            }
        }
    }

    $scope.existInCarrinho = function (id) {
        if ($scope.carrinhoPontos.indexOf(id) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    $scope.addCarrinhoPontos = function (idPonto) {
        
        var promise = PontoService.select(idPonto);
        promise.then(function (response) {
            console.log(response.data);            
            $scope.carrinhoPontos.push(response.data);
        }, function (error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });

        $('.tooltipped').tooltip('remove');
    }

    $scope.remCarrinhoPontos = function (idPonto) {
        var index = $scope.carrinhoPontos.indexOf(idPonto);
        $scope.carrinhoPontos.splice(index, 1);
        $('.tooltipped').tooltip('remove');
    }

    $scope.descontarPontos = function (idCliente) {



    }

});
