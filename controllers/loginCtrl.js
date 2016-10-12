app.controller('loginCtrl', function($scope, $location){

    //Logar
    $scope.logar = function(usuario){

        $location.path('home');
    };

});
