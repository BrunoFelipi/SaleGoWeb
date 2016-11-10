app.controller('loginCtrl', function($scope, $rootScope, $location, toastr, EmpresaService){

    //Logar
    $scope.logar = function(usuario){

        var promise = EmpresaService.logar(usuario.email, email.senha);

        promise.then(function(response){

            console.log(response.data);

            $rootScope.usuario.nome = "Nome Usuário";
            $rootScope.usuario.email = usuario.email;
            $location.path('home');

            if(response.data == 'true'){

            } else if(response.data == 'false'){

            } else {

            }
        }, function(error){
            toastr.error('Erro de conexão com o Servidor','Erro');
        });


    };

});
