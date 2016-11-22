app.controller('pontoCtrl', function($scope, $rootScope, $location, PontoService, $routeParams, $filter){

    $scope.ponto = [];

    var promise = PontoService.select($routeParams.id);
    promise.then(function(response){        
        $scope.ponto = response.data;
    }, function(error){
        Materialize.toast('Erro de conexão com o banco', 4000);
    });
	
	$scope.abc = function(){
		$scope.teste = $filter('date')($scope.dia, 'dd/MM/yyyy');
		
	} 

});
