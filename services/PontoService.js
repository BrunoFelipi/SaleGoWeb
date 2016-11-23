app.factory('PontoService', function($http, $rootScope, $location){
    return {
        selectAll(idEmpresa){
            return $http({
                method: 'post',
                url: 'ws/ponto/selectAll.php',
                data: {idEmpresa: idEmpresa}
            });
        },
        select(idPonto){
            return $http({
                method: 'post',
                url: 'ws/ponto/select.php',
                data: {idPonto: idPonto}
            });
        },
        insert: function(idEmpresa, ponto){
            ponto.idEmpresa = idEmpresa;
            return $http({
                method: 'post',
                url: 'ws/ponto/insert.php',
                data: ponto
            });
        }
    }
});
