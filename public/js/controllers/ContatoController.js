(function() {
    'use strict';

    angular.module("ntalk").controller("ContatoController", contatoCtrl);

    function contatoCtrl($scope, $routeParams, Contato, $location) {
        $scope.contato = new Contato();
        $scope.salva = salvaCont;

        if ($routeParams.id) {
            Contato.get({id: $routeParams.id},
                function (contato) {
                    $scope.contato = contato;
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Não foi possível obter o contato'
                    };
                    console.log(erro);
                }
            );
        }
        function salvaCont() {
            $scope.contato.$save()
                .then(function () {
                    $scope.mensagem = {texto: 'Salvo com sucesso'};
                    $location.path('#/api/contatos');
                    //$scope.contato = new Contato();
                })
                .catch(function (erro) {
                    $scope.mensagem = {texto: 'Não foi possível salvar'};
                });
        }
    }
})();