angular.module('ntalk', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider.when('/api/contatos', {
            templateUrl: '../partials/contatos.html',
            controller: 'ContatosController'
        })
        .when('/api/contato', {
            templateUrl: '../partials/contato.html',
            controller: 'ContatoController'
        })
        .when('/api/contato/:id', {
            templateUrl: '../partials/contato.html',
            controller: 'ContatoController'
        })
        .otherwise({redirectTo: '/api/contatos'});
    }
);