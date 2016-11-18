app.factory('PontoService', function($http, $rootScope, $location){
    return {

        selectAll: function(idEmpresa){
            return $http({
                method: 'get',
                url: 'ws/ponto/selectAll.php',
                params: {idEmpresa: idEmpresa}
            });
        },
        insert: function(ponto){
            return $http({
                method: 'post',
                url: 'ws/ponto/insert.php',
                data: ponto
            });
        }
    }
});
