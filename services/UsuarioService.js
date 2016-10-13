app.factory('UsuarioService', function($http, $rootScope, $location){
    return {

        validarSenha: function(email, senha){
            return $http({
                method: 'get',
                url: 'ws/usuario/validarSenha.php',
                params: {email: email, senha: senha}
            });
        }

        select: function(email){
            return $http({
                method: 'get',
                url: 'ws/usuario/select.php',
                params: {email: email}
            });
        },
        selectToken: function(token){
            return $http({
                method: 'get',
                url: 'ws/usuario/selectToken.php',
                params: {token: token}
            });
        },
        logar: function(email, senha){
          return $http({
              method: 'get',
              url: 'ws/usuario/logar.php',
              params: {email: email, senha: senha}
          });
        },
        cadastrar: function(nome, email, senha){
            return $http({
                method: 'post',
                url: 'ws/usuario/insert.php',
                data: {nome: nome, email: email, senha: senha}
            });
        },
        existEmail: function(email){
            return $http({
                method: 'get',
                url: 'ws/usuario/existEmail.php',
                params: {email: email}
            });
        },
        enviarEmailEsqueceuSenha: function(email, token){
            return $http({
                method: 'get',
                url: 'ws/usuario/enviarEmailEsqueceuSenha.php',
                params: {email: email, token: token}
            });
        },
        enviarEmailAlterouSenha: function(email){
            return $http({
                method: 'get',
                url: 'ws/usuario/enviarEmailAlterouSenha.php',
                params: {email: email}
            });
        },
        alterarSenha: function(email, senha){
            return $http({
                method: 'post',
                url: 'ws/usuario/alterarSenha.php',
                data: {email: email, senha: senha}
            });
        },
		validar: function(){
            if($rootScope.usuario.id == -1)
            {
                $location.path('login');
            }
        },
        encerrar: function(){
            $rootScope.usuario.id == -1;
            $location.path('login');
        },
        getUsuario: function(){
            return $rootScope.usuario;
        }
    }
});
