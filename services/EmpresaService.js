app.factory('EmpresaService', function($http, $rootScope, $location){
    return {

        validarSenha: function(email, senha){
            return $http({
                method: 'post',
                url: 'ws/empresa/validarSenha.php',
                data: {email: email, senha: senha}
            });
        },
        alterarSenha: function(email, senha){
            return $http({
                method: 'post',
                url: 'ws/empresa/alterarSenha.php',
                data: {email: email, senha: senha}
            });
        },
        select: function(email){
            return $http({
                method: 'get',
                url: 'ws/empresa/select.php',
                params: {email: email}
            });
        },
        logar: function(email, senha){
          return $http({
              method: 'post',
              url: 'ws/empresa/logar.php',
              data: {email: email, senha: senha}
          });
        },
        
        enviarEmailEsqueceuSenha: function(empresa){
            return $http({
                method: 'post',
                url: 'ws/empresa/enviarEmailEsqueceuSenha.php',
                data: empresa
            });
        }

        
    }
});
