app.controller('loginCtrl', function($scope, $rootScope, $location, toastr, EmpresaService){

    $scope.empresaAtiva = [];

    //Logar
    $scope.logar = function(empresa){

        var promise = EmpresaService.logar(empresa.email, empresa.senha);
        promise.then(function(response){

            if(response.data == 'true'){

                var promise = EmpresaService.select(empresa.email);
                promise.then(function(response){

                    $scope.empresaAtiva = response.data[0];
                    if($scope.empresaAtiva.ativo == 's'){
                        $rootScope.empresaAtiva = $scope.empresaAtiva;
                        $location.path('home');
                    } else {
                        Materialize.toast('Entre em contato com o administrador para ativar a empresa',2000);
                    }

                }, function(error){
                    toastr.error('Erro de conexão com o Servidor','Erro');
                });

            } else if(response.data == 'false'){
                Materialize.toast('Credenciais inválidas',2000);
            } else {
                Materialize.toast('Erro de conexão com o servidor',2000);
            }
        }, function(error){
            Materialize.toast('Erro de conexão com o servidor',2000);
        });

    };

});
