app.controller('loginCtrl', function($scope, $rootScope, $location, toastr, EmpresaService){

    //Logar
    $scope.logar = function(usuario){

        var promise = EmpresaService.logar(usuario.email, email.senha);

        promise.then(function(response){

            console.log(response.data);

            if(response.data == 'true'){
                $rootScope.usuario.nome = "Nome Usuário";
                $rootScope.usuario.email = usuario.email;
                $location.path('home');
            } else if(response.data == 'false'){
                toastr.error('Usuario ou Senha incorretos','Erro');
            } else {
                toastr.error('else','Erro');
            }
        }, function(error){
            toastr.error('Erro de conexão com o Servidor','Erro');
        });


    };

});
