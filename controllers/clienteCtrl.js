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

        console.log('aaa');
        $scope.valorTotalPontos = valorTotalPontosC;

    }

    $scope.descontarPontos = function () {
        console.log($scope.cliente[0].id);


    }

});
