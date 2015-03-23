angular.module('ntalk', ['ngRoute', 'ngResource', 'ui.select2'])
    .config(configRotas);

function configRotas($routeProvider) {
    $routeProvider.when('/api/contatos', {
        templateUrl: '../partials/contatos.html',
        controller: 'ContatosController',
        controllerAs: 'vm'
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