app.factory('UsuarioService', function($http){
    return {
        add: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/usuario/add.php',
                data: usuario
            });
        },
        login: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/usuario/login.php',
                data: usuario
            });
        },
        jaExiste: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/usuario/jaExiste.php',
                data: usuario
            });
        },
        solicitarRegistro: function(email){
            return $http({
                method: 'post',
                url: 'ws/registro/registro.php',
                data: {email: email}
            });
        }
    };
});
