app.controller('relatorioCtrl', function($scope, $rootScope, $location){

    if($rootScope.empresa.id < 1){
        $location.path('login');
        return;
    }


  	$scope.empresaAtiva = $rootScope.empresaAtiva;

});
