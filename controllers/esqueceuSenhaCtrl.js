app.controller('esqueceuSenhaCtrl', function($scope, UsuarioService, toastr, $location){

    $scope.enviarEmail = function(){

        var promise = UsuarioService.solicitarRegistro($scope.email);

        promise.then(function(response){
            if(response.data == 'true'){
                toastr.success('E-mail enviado com sucesso','Sucesso');
                $location.path('login');
            } else {
                toastr.error('Erro ao enviar e-mail','Erro');
            }
        }, function(error){
            toastr.error('Erro de conexão com Servidor','Erro');
        });
    };

});
