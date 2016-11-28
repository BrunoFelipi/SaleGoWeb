app.factory('RelatorioService', function($http, $rootScope, $location){
    return {
        
        carregarClienteSelecionado: function(idCliente){
            return $http({
                method: 'post',
                url: 'ws/relatorio/carregarClienteSelecionado.php',
                data: {idCliente: idCliente}
            });
        },
        carregarClientes: function(idEmpresa){
            return $http({
                method: 'post',
                url: 'ws/relatorio/carregarClientes.php',
                data: {idEmpresa: idEmpresa}
            });
        },
        carregarPontosCliente: function(idCliente){
            return $http({
                method: 'post',
                url: 'ws/relatorio/carregarPontosCliente.php',
                data: {idCliente: idCliente}
            });
        },
    }
});
