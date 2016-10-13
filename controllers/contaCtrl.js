app.controller('contaCtrl', function($scope, $location, $rootScope, UsuarioService){

    $scope.nome = $rootScope.usuario.nome;
    $scope.email = $rootScope.usuario.email;

    $scope.closeModal = function(){
        $('#modalAlterarSenha').closeModal();
    }

    $scope.alterarSenha = function(){

        $scope.senhaAtu = document.getElementById("senhaAtual").value;
        $scope.novaSen = document.getElementById("novaSenha").value;
        $scope.confNovaSenha = document.getElementById("confirmarNovaSenha").value;

        if($scope.novaSen !== $scope.confNovaSenha){
            Materialize.toast('Senhas não conferem', 4000);
        } else {

            var validarSenha = UsuarioService.validarSenha($scope.email, $scope.senhaAtu);
            var alterarSenha = UsuarioService.alterarSenha($scope.email, $scope.novaSen);

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
