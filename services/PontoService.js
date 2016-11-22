app.factory('PontoService', function($http, $rootScope, $location){
    return {

        selectAll(idEmpresa){
            return $http({
                method: 'post',
                url: 'ws/ponto/selectAll.php',
                data: {idEmpresa: idEmpresa}
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
