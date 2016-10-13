app.controller('contaCtrl', function($scope, $location, $rootScope){

  $scope.closeModal = function(){
    $('#modalAlterarSenha').closeModal();
  }

  $scope.alterarSenha = function(){

    $scope.senhaAtu = document.getElementById("senhaAtual").value;
    $scope.novaSen = document.getElementById("novaSenha").value;
    $scope.confNovaSenha = document.getElementById("confirmarNovaSenha").value;

    alert($rootScope.email);

    if($scope.novaSen !== $scope.confNovaSenha){
      Materialize.toast('Senhas não conferem', 4000)
    } else {

      UsuarioService.alterarSenha($rootScope.email, $scope.novaSen).then(function(response){
            var logou = response.data;

            if (logou == 'true') {

                UsuarioService.select(usuario.email).then(function(response){
                    $rootScope.usuario = response.data[0];
                    $location.path('todos');
                },function(error){
                    toastr.error('Erro ao conectar ao servidor','Erro');
                });

            } else {
                toastr.error('Usuário ou senha incorretos','Erro');
                document.getElementById("email").value = '';
                document.getElementById("senha").value = '';
                document.getElementById("email").focus();
            }

        }, function(error){
            toastr.error('Erro ao conectar ao servidor','Erro');
        });

    }

  }

  $scope.usuario = {
    nome : "Email Teste",
    email : "email@email.com.br"
  };

});
