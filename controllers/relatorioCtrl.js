app.controller('relatorioCtrl', function($scope, $rootScope, $location){
    
    if($rootScope.empresaAtiva.id < 1){
        $location.path('login');
        return;
    }

  	$scope.empresaAtiva = $rootScope.empresaAtiva;

});
