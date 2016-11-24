app.controller('homeCtrl', function ($scope, $rootScope, $location, PontoService) {
    /*
        if($rootScope.empresaAtiva.id < 1){
            $location.path('login');
            return;
        }
    */

    $scope.empresaAtiva = $rootScope.empresaAtiva;
    $scope.pontos = [];

    var promise = PontoService.updatePontosVencidos($scope.empresaAtiva.id);
    promise.then(function (response) {
        
        if (response.data == 'false') {
            Materialize.toast('Erro ao deletar os pontos vencidos', 4000);
        } 

        var promise = PontoService.selectAll($scope.empresaAtiva.id);
        promise.then(function (response) {
            $scope.pontos = response.data;
            $scope.initMap();
        }, function (error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }, function (error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    $scope.viewClienteGetPonto = function (idPonto) {
        $location.path('ponto/' + idPonto);
    }

    $scope.initMap = function () {

        var myLatLng = { lat: -26.9086729, lng: -49.0744575 };

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: true,
            zoom: 13
        });

        for (var ponto in $scope.pontos) {
            // Add the circle for this city to the map.
            var centro = new google.maps.LatLng(parseFloat($scope.pontos[ponto].latitude), parseFloat($scope.pontos[ponto].longitude));
            var cityCircle = new google.maps.Circle({
                title: 'Uluru (Ayers Rock)',
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: centro,
                radius: Math.sqrt($scope.pontos[ponto].raioAlcance * 1000)
            });

        }
    }
});
