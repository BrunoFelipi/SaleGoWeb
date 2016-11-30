app.controller('homeCtrl', function($scope, $rootScope, $location, $route, PontoService, $filter) {

    if ($rootScope.empresaAtiva.id < 1 || $rootScope.empresaAtiva.id == undefined) {
        $location.path('login');
        return;
    }

    $scope.empresaAtiva = $rootScope.empresaAtiva;
    $scope.pontos = [];

    var promise = PontoService.updatePontosVencidos($scope.empresaAtiva.id);
    promise.then(function(response) {

        if (response.data == 'false') {
            Materialize.toast('Erro ao desativar os pontos vencidos', 4000);
        }

        var promise = PontoService.updatePontosPegosVencidos($scope.empresaAtiva.id);
        promise.then(function(response) {

        }, function(error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });

        var promise = PontoService.selectAll($scope.empresaAtiva.id);
        promise.then(function(response) {
            $scope.pontos = response.data;

            if (Object.keys($scope.pontos).length == 0) {
                $scope.initMap();
                return;
            }

            for (var i = 0; i < $scope.pontos.length; i++) {
                $scope.idPonto = $scope.pontos[i].id;
                $scope.getQtdClientesPonto($scope.idPonto);
            }

        }, function(error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }, function(error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

    $scope.getQtdClientesPonto = function(idPonto) {
        var promise = PontoService.getQtdClientesPonto(idPonto);
        promise.then(function(response) {
            $scope.updateQtdClientesPonto(idPonto, response.data[0].qtdIdPonto);
        }, function(error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }

    $scope.updateQtdClientesPonto = function(idPonto, qtdPonto) {
        var promise = PontoService.updateQtdClientesPonto(idPonto, qtdPonto);
        promise.then(function(response) {

            if (response.data == 'true') {
                var promise = PontoService.selectAll($scope.empresaAtiva.id);
                promise.then(function(response) {
                    $scope.pontos = response.data;
                    $scope.initMap();
                }, function(error) {
                    Materialize.toast('Erro de conexão com o banco', 4000);
                });
            } else {
                $scope.initMap();
            }

        }, function(error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }

    $scope.viewClienteGetPonto = function(idPonto) {
        $location.path('ponto/' + idPonto);
    }

    $scope.ativar = function(idPonto, pontoAtivo) {

        if (pontoAtivo == undefined) {
            pontoAtivo = 'n';
        }

        if (pontoAtivo == 's') {

            var promise = PontoService.ativar(idPonto);
            promise.then(function(response) {

                if (response.data == 'true') {
                    var promise = PontoService.selectAll($scope.empresaAtiva.id);
                    promise.then(function(response) {
                        $scope.pontos = [];
                        $scope.pontos = response.data;
                        $scope.initMap();
                    }, function(error) {
                        Materialize.toast('Erro de conexão com o banco', 4000);
                    });
                }
            }, function(error) {
                Materialize.toast('Erro de conexão com o banco', 4000);
            });

        } else if (pontoAtivo == 'n') {
            var promise = PontoService.desativar(idPonto);
            promise.then(function(response) {

                if (response.data == 'true') {
                    var promise = PontoService.selectAll($scope.empresaAtiva.id);
                    promise.then(function(response) {
                        $scope.pontos = [];
                        $scope.pontos = response.data;
                        $scope.initMap();
                    }, function(error) {
                        Materialize.toast('Erro de conexão com o banco', 4000);
                    });
                }
            }, function(error) {
                Materialize.toast('Erro de conexão com o banco', 4000);
            });
        }
    }

    $scope.initMap = function() {

        var myLatLng = { lat: -26.9086729, lng: -49.0744575 };

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: true,
            zoom: 13,
            styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#6195a0" }] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "lightness": "0" }, { "saturation": "0" }, { "color": "#f5f5f2" }, { "gamma": "1" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "lightness": "-3" }, { "gamma": "1.00" }] }, { "featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#bae5ce" }, { "visibility": "on" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#fac9a9" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "color": "#4e4e4e" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#787878" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit.station.airport", "elementType": "labels.icon", "stylers": [{ "hue": "#0a00ff" }, { "saturation": "-77" }, { "gamma": "0.57" }, { "lightness": "0" }] }, { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [{ "color": "#43321e" }] }, { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [{ "hue": "#ff6c00" }, { "lightness": "4" }, { "gamma": "0.75" }, { "saturation": "-68" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#eaf6f8" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c7eced" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-49" }, { "saturation": "-53" }, { "gamma": "0.79" }] }]
        });
        for (var ponto in $scope.pontos) {

            if ($scope.pontos[ponto].ativo == 's' && $scope.pontos[ponto].vencido == 'n') {
                // Add the circle for this city to the map.
                var centro = new google.maps.LatLng(parseFloat($scope.pontos[ponto].latitude), parseFloat($scope.pontos[ponto].longitude));
                var cityCircle = new google.maps.Circle({
                    title: $scope.pontos[ponto].endereco,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: centro,
                    radius: $scope.pontos[ponto].raioAlcance * 13
                });
                var content = "<html>" + $scope.pontos[ponto].descricao + '</html>';
                infowindow = new google.maps.InfoWindow();
                google.maps.event.addListener(cityCircle, 'click', (function(cityCircle, content, infoWindow) {
                    return function() {
                        infoWindow.setContent(content);
                        infoWindow.setPosition(cityCircle.center);
                        infoWindow.open(map, cityCircle);
                    };
                })(cityCircle, content, infowindow));
            }
        }
    }

    $scope.reloadView = function() {
        $route.reload();
    }

    $scope.redText = function(id) {
        var promise = PontoService.select(id);
        promise.then(function(response) {            
            if(response.data[0].dataVencimento > $filter('date')(new Date(), 'yyyy-MM-dd')){
                console.log(true);
                return true;                
            } else {
                console.log(false);                
                return false;
            }
        }, function(error) {
            Materialize.toast('Erro de conexão com o banco', 4000);
        });
    }

    $scope.redText(16);

});
