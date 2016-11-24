app.factory('PontoService', function($http, $rootScope, $location){
    return {
        selectAll: function(idEmpresa){
            return $http({
                method: 'post',
                url: 'ws/ponto/selectAll.php',
                data: {idEmpresa: idEmpresa}
            });
        },
        select: function(idPonto){
            return $http({
                method: 'post',
                url: 'ws/ponto/select.php',
                data: {idPonto: idPonto}
            });
        },
        ativar: function(valor, idPonto){
            return $http({
                method: 'post',
                url: 'ws/ponto/ativar.php',
                data: {valor: valor, idPonto: idPonto}
            });
        },
        updatePontosVencidos: function(idEmpresa){
            return $http({
                method: 'post',
                url: 'ws/ponto/updatePontosVencidos.php',
                data: {idEmpresa: idEmpresa}
            });
        },
        insert: function(idEmpresa, latitude, longitude, ponto){
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
