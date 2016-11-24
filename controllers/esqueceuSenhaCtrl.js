app.controller('esqueceuSenhaCtrl', function ($scope, EmpresaService, $rootScope, $location) {

    $scope.empresa = [];

    $scope.enviarEmail = function () {

        var promise = EmpresaService.select($scope.email);
        promise.then(function (response) {

            if (response.data[0] != null) {
                $scope.empresa = response.data[0];

                var promise = EmpresaService.enviarEmailEsqueceuSenha($scope.empresa);

                promise.then(function (response) {
                    console.log(response.data);
                    if (response.data == 'true') {
                        Materialize.toast('E-mail enviado com sucesso', 4000);
                        $location.path('login');
                    } else {
                        Materialize.toast('Erro ao enviar e-mail', 4000);
                    }
                }, function (error) {
                    Materialize.toast('Erro de conexão com Servidor', 4000);
                });

            } else {
                Materialize.toast('Email inválido', 4000);
            }

        }, function (error) {
            Materialize.toast('Erro de conexão com Servidor', 4000);
        });
    };
});
