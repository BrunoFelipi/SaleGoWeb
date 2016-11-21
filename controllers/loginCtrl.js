app.controller('loginCtrl', function($scope, $rootScope, $location, toastr, EmpresaService){

    $scope.empresa = [];

    //Logar
    $scope.logar = function(usuario){
        $rootScope.empresa.id = 2;
        $rootScope.empresa.nome = 'Empresa Teste';
        $rootScope.empresa.cnpj = '1234567890';
        $rootScope.empresa.email = 'empresateste@teste.com.br';
        $rootScope.empresa.ativo = 'sim';
        $location.path('home');
        /*
        var promise = EmpresaService.logar(usuario.email, usuario.senha);
        promise.then(function(response){
            if(response.data == 'true'){

                var promise = EmpresaService.select(usuario.email);
                promise.then(function(response){

                    $scope.empresa = response.data;

                    console.log($scope.empresa);
                    $rootScope.empresa.id = $scope.empresa.id;
                    $rootScope.empresa.nome = $scope.empresa.nome;
                    $rootScope.empresa.cnpj = $scope.empresa.cnpj;
                    $rootScope.empresa.email = $scope.empresa.email;
                    $rootScope.empresa.ativo = $scope.empresa.ativo;


                    $location.path('home');

                }, function(error){
                    toastr.error('Erro de conexão com o Servidor','Erro');
                });

            } else if(response.data == 'false'){
                Materialize.toast('Credenciais inválidas',2000);
            } else {
                Materialize.toast('Outro erro',2000);
            }
        }, function(error){
            toastr.error('Erro de conexão com o Servidor','Erro');
        });

*/
    };

});
