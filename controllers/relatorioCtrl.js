app.controller('relatorioCtrl', function($scope, $rootScope, $route, $location, RelatorioService, $filter) {

    if ($rootScope.empresaAtiva.id < 1 || $rootScope.empresaAtiva.id == undefined) {
        $location.path('login');
        return;
    }

    $scope.empresaAtiva = $rootScope.empresaAtiva;

    $scope.reloadView = function() {
        $route.reload();
    }

    var promise = RelatorioService.carregarClientes($rootScope.empresaAtiva.id);
    promise.then(function(response) {
        $scope.clientes = response.data;
    }, function(error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    $scope.openViewDetalheCliente = function(idCliente){
        $location.path('/relatorio/cliente/' + idCliente);
    }

});
