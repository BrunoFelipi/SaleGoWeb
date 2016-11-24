app.controller('contaCtrl', function($scope, $location, $rootScope, ClienteService, EmpresaService){

/*
    if($rootScope.empresa.id < 1){
        $location.path('login');
        return;
    }
*/

    $scope.empresaAtiva = $rootScope.empresaAtiva;

    $scope.closeModal = function(){
        $('#modalAlterarSenha').closeModal();
    }

    $scope.alterarSenha = function(){

        if($scope.novaSen !== $scope.confNovaSenha){
            Materialize.toast('Senhas não conferem', 4000);
        } else {

            var validarSenha = EmpresaService.validarSenha($scope.email, $scope.senhaAtu);
            var alterarSenha = EmpresaService.alterarSenha($scope.email, $scope.novaSen);

            validarSenha.then(function(response){

                var existe = response.data;

                if(existe == 'true'){

                    alterarSenha.then(function(response){

                        var logou = response.data;

                        if (logou == 'true') {
                            Materialize.toast('Senha Alterada', 4000);
                        } else {
                            Materialize.toast('Erro ao alterar a senha', 4000);
                        }

                    }, function(error){
                        toastr.error('Erro ao conectar ao servidor','Erro');
                    });
                }
            }, function(error){

            });
        }
    }
});
