app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html'
    })
    .when('/publicar', {
        templateUrl: 'views/publicar.html'
    })
});
