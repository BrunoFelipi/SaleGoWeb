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
    .when('/cadastrarPonto', {
        templateUrl: 'views/cadastrarPonto.html'
    })
    .when('/relatorio', {
        templateUrl: 'views/relatorio.html'
    })
    .when('/conta', {
        templateUrl: 'views/conta.html'
    })
    .when('/ponto/:id', {
        templateUrl: 'views/ponto.html'
    })
});
