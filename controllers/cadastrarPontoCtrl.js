app.controller('cadastrarPontoCtrl', function($scope, $rootScope, $location){

  	$scope.empresaAtiva = $rootScope.empresaAtiva;

	$scope.latitude = '-26.9166207';
	$scope.longitude = '-49.0717429';

    $scope.limparCampos = function(){
        $location.path('cadastrarPonto');
    }

});
