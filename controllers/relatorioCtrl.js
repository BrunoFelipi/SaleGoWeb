app.controller('relatorioCtrl', function($scope, $rootScope, $location){

    /* COMENTAR PARA TESTE
        if($rootScope.empresa.id < 1){
            $location.path('login');
            return;
        }
    */


  	$scope.empresa = $rootScope.empresa;

});
