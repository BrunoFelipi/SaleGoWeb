app.controller('cadastrarPontoCtrl', function($scope, $location){

    $scope.limparCampos = function(){
        $location.path('cadastrarPonto');
    }

    $scope.nome = "Email Teste";
    $scope.email = "email@email.com.br";

});
