app.controller('cadastrarPontoCtrl', function($scope, $location){

	$scope.latitude = '-26.9166207';
	$scope.longitude = '-49.0717429';

    $scope.limparCampos = function(){
        $location.path('cadastrarPonto');
    }

		$scope.usuario = {
	    nome : "Email Teste",
	    email : "email@email.com.br"
	  };

});
