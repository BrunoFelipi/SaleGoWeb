app.controller('clienteCtrl', function($scope, $rootScope, $location, RelatorioService, PontoService, $routeParams, $filter) {

    $scope.cliente = [];
    $scope.pontosCliente = [];
    $scope.carrinhoPontos = [];

    $scope.valorTotalPorcentagem = 0;
    $scope.valorTotalReais = 0;

    var totalPorcentagem = 0;
    var totalReais = 0;

    var promise = RelatorioService.carregarClienteSelecionado($routeParams.id);
    promise.then(function(response) {
        $scope.cliente = response.data;
    }, function(error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    var promise = RelatorioService.carregarPontosCliente($routeParams.id);
    promise.then(function(response) {
        $scope.pontosCliente = response.data;
    }, function(error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    $scope.existInCarrinho = function(id) {
        for (var i = 0; i < $scope.carrinhoPontos.length; i++) {            
            if ($scope.carrinhoPontos[i].id == id) {
                return true;
            }
        }
        return false;
    }

    $scope.addCarrinhoPontos = function(idPonto) {

        var promise = PontoService.select(idPonto);
        promise.then(function(response) {
            $scope.carrinhoPontos.push(response.data[0]);            
        }, function(error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }

    $scope.remCarrinhoPontos = function(idPonto) {

        var promise = PontoService.select(idPonto);
        promise.then(function(response) {
            var index = $scope.carrinhoPontos.indexOf(idPonto);
            $scope.carrinhoPontos.splice(index, 1);
        }, function(error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });

    }

    $scope.descontarPontos = function() {
        console.log($scope.cliente[0].id);
    }

});
