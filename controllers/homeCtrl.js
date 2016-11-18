app.controller('homeCtrl', function($scope, $rootScope, $location, PontoService){

  $scope.empresa = $rootScope.empresa;

  $scope.pontos = [];

  var getPontos = PontoService.selectAll();

  getPontos.then(function(response){

      console.log($scope.empresa.id);

  }, function(error){

  });

});
