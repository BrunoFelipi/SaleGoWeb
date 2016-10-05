app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html'
    })
    .when('/login', {
        templateUrl: 'views/login.html'
    })
    .when('/senha', {
        templateUrl: 'views/esqueceuSenha.html'
    })
    .when('/home', {
        templateUrl: 'views/home.html'
    })
});
