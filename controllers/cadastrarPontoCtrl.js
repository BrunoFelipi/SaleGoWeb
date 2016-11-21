app.controller('cadastrarPontoCtrl', function($scope, $rootScope, $location){

  	$scope.empresa = $rootScope.empresa;

	$scope.latitude = '-26.9166207';
	$scope.longitude = '-49.0717429';

    $scope.limparCampos = function(){
        $location.path('cadastrarPonto');
    }

});
