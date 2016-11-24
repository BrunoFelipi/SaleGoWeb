app.controller('contaCtrl', function ($scope, $location, $rootScope, ClienteService, EmpresaService) {

    /*
        if($rootScope.empresa.id < 1){
            $location.path('login');
            return;
        }
    */

    $scope.empresaAtiva = $rootScope.empresaAtiva;

    $scope.closeModal = function () {
        $('#modalAlterarSenha').closeModal();
    }

    $scope.alterarSenha = function () {

        if ($scope.novaSen !== $scope.confNovaSenha) {
            Materialize.toast('Senhas não conferem', 4000);
            return;
        }

        var promise = EmpresaService.validarSenha($scope.empresaAtiva.email, $scope.senhaAtu);                
        promise.then(function (response) {
            
            var existe = response.data;

            if(existe == 'senha invalida'){
                Materialize.toast('Senha Atual Inválida', 4000);
            } else {

                var promise = EmpresaService.alterarSenha($scope.empresaAtiva.email, $scope.novaSen);
                promise.then(function (response) {

                    var logou = response.data;
                    
                    if (logou == 'true') {
                        Materialize.toast('Senha Alterada', 4000);
                    } else {
                        Materialize.toast('Erro ao alterar a senha', 4000);
                    }

                }, function (error) {
                    Materialize.toast('Erro ao conectar ao servidor', 4000);                    
                });
            }
        }, function (error) {
            Materialize.toast('Erro ao conectar ao servidor', 4000);
        });

    }
});
