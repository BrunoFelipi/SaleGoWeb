app.factory('PontoService', function ($http, $rootScope, $location) {
    return {
        selectAll: function (idEmpresa) {
            return $http({
                method: 'post',
                url: 'ws/ponto/selectAll.php',
                data: { idEmpresa: idEmpresa }
            });
        },
        select: function (idPonto) {
            return $http({
                method: 'post',
                url: 'ws/ponto/select.php',
                data: { idPonto: idPonto }
            });
        },
        selectQtdClientes: function (idPonto) {
            return $http({
                method: 'post',
                url: 'ws/ponto/select.php',
                data: { idPonto: idPonto }
            });
        },
        getQtdClientesPonto: function (idPonto) {
            return $http({
                method: 'post',
                url: 'ws/ponto/selectQtdClientesPonto.php',
                data: { idPonto: idPonto }
            });
        },
        updateQtdClientesPonto: function (idPonto, qtdClientes) {
            return $http({
                method: 'post',
                url: 'ws/ponto/updatePontoSetQtdCliente.php',
                data: { idPonto: idPonto, qtdClientes: qtdClientes }
            });
        },
        selectUsuariosPonto: function (idPonto, idEmpresa) {
            return $http({
                method: 'post',
                url: 'ws/ponto/selectUsuariosPonto.php',
                data: { idPonto: idPonto, idEmpresa: idEmpresa }
            });
        },
        ativar: function (idPonto) {
            return $http({
                method: 'post',
                url: 'ws/ponto/ativar.php',
                data: { idPonto: idPonto }
            });
        },
        desativar: function (idPonto) {
            return $http({
                method: 'post',
                url: 'ws/ponto/desativar.php',
                data: { idPonto: idPonto }
            });
        },
        desativarPontoPego: function (idPonto, idCliente) {
            return $http({
                method: 'post',
                url: 'ws/ponto/desativarPontoPego.php',
                data: { idPonto: idPonto, idCliente: idCliente }
            });
        },
        updatePontosVencidos: function (idEmpresa) {
            return $http({
                method: 'post',
                url: 'ws/ponto/updatePontosVencidos.php',
                data: { idEmpresa: idEmpresa }
            });
        },
        updatePontosPegosVencidos: function (idEmpresa) {
            return $http({
                method: 'post',
                url: 'ws/ponto/updatePontosPegosVencidos.php',
                data: { idEmpresa: idEmpresa }
            });
        },
        
        insert: function(idEmpresa, latitude, longitude, ponto) {
            ponto.idEmpresa = idEmpresa;
            ponto.latitude = latitude;
            ponto.longitude = longitude;
            return $http({
                method: 'post',
                url: 'ws/ponto/insert.php',
                data: ponto
            });
        }
    }
});
