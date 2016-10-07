app.controller('cadastrarPontoCtrl', function($scope, $location){


  $scope.initMap = function () {

      var uluru = {lat: $scope.latitude, lng: $scope.longitude};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });

      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }

    $scope.limparCampos = function(){
        $location.path('cadastrarPonto');
    }

    $scope.nome = "Email Teste";
    $scope.email = "email@email.com.br";

});
