app.factory('UsuarioService', function($http){
    return {

      alterarSenha: function(email, novaSenha){
          return $http({
              method: 'post',
              url: 'ws/usuario/alterarSenha.php',
              data: {email: email, novaSenha: novaSenha}
          });
      },



    };
});
