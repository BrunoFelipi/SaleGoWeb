app.factory('RelatorioService', function($http, $rootScope, $location){
    return {

        carregarPontosPegos: function(idEmpresa){
            return $http({
                method: 'post',
                url: 'ws/relatorio/carregarPontosPegos.php',
                data: {idEmpresa: idEmpresa}
            });
        },
        carregarClientes: function(idCliente){
            return $http({
                method: 'post',
                url: 'ws/relatorio/carregarClientes.php',
                data: {idCliente: idCliente}
            });
        },
    }
});
