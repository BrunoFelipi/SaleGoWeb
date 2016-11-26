app.controller('cadastrarPontoCtrl', function ($scope, $rootScope, $route, $location, PontoService, $filter) {

    if ($rootScope.empresaAtiva.id < 1) {
        $location.path('login');
        return;
    }

    $scope.empresaAtiva = $rootScope.empresaAtiva;

    $scope.latitude = '-26.9086729';
    $scope.longitude = '-49.0744575';
    $scope.dataAtual = $filter('date')(new Date(), 'dd/MM/yyyy');

    $scope.cadastrarPonto = function (ponto) {
        $scope.ponto = ponto;
        if ($scope.ponto.tipoDesconto == null) {
            Materialize.toast('Selecione um tipo', 4000);
            return;
        }

        if ($scope.ponto.dataValidade == null) {
            Materialize.toast('Necessário preencher<br>Data de Validade', 4000);
            return;
        }

        if ($scope.dataAtual > $scope.ponto.dataValidade) {
            Materialize.toast('Data informada é menor<br>que a data atual', 4000);
            return;
        }

        var promise = PontoService.insert($scope.empresaAtiva.id, $scope.latitude, $scope.longitude, $scope.ponto);
        promise.then(function (response) {
            if (response.data == 'true') {
                $route.reload();
                Materialize.toast('Ponto cadastrado com sucesso', 2000);
            } else {
                Materialize.toast('Erro ao cadastrar $scope.ponto', 2000);
            }
        }, function (error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }

    $scope.limparCampos = function () {
        $route.reload();
    }



    $scope.initMap = function () {

        var geocoder = new google.maps.Geocoder();

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng($scope.latitude, $scope.longitude),
            scrollwheel: true,
            zoom: 12
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
            map: map,
            draggable: true,
        });

        geocoder.geocode({ 'address': document.getElementById('endereco').value, 'region': 'BR' }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    $scope.latitude = results[0].geometry.location.lat();
                    $scope.longitude = results[0].geometry.location.lng();
                    var location = new google.maps.LatLng($scope.latitude, $scope.longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(17);
                }
            }
        });

        function updateInputAddress(str) {
            document.getElementById('endereco').value = str;
        }

        function geocodePosition(pos) {
            geocoder.geocode({
                'latLng': pos
            }, function (responses) {
                if (responses && responses.length > 0) {
                    updateInputAddress(responses[0].formatted_address);
                }
            });
        }

        google.maps.event.addListener(marker, 'dragend', function () {
            geocodePosition(marker.getPosition());
        });
    }

    $scope.initMap();


});
