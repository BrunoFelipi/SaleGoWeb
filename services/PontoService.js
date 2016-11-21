app.factory('PontoService', function($http, $rootScope, $location){
    return {

        selectAll: function(id){
            return $http({
                method: 'post',
                url: 'ws/ponto/selectAll.php',
                data: id
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
