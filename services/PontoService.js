app.factory('PontoService', function($http, $rootScope, $location){
    return {

        selectAll: function(){
            return $http({
                method: 'post',
                url: 'ws/ponto/selectAll.php'
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
