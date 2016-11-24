app.controller('esqueceuSenhaCtrl', function($scope, EmpresaService, toastr, $location){

    if($rootScope.empresa.id < 1){
        $location.path('login');
        return;
    }

    $scope.enviarEmail = function(){

        var promise = EmpresaService.enviarEmailEsqueceuSenha($scope.email);

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
