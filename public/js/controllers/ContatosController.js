(function() {
    'use strict';

    angular.module("ntalk").controller("ContatosController", contatosCtrl);

    function contatosCtrl(Contato, $scope) {
        $scope.contatos = [];
        $scope.filtro = '';
        $scope.mensagem = {texto: ''};
        $scope.remove = removeCont;
        buscaContatos();

        function removeCont(contato) {
            Contato.delete({id: contato._id},
                buscaContatos,
                function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível remover o contato'};
                    console.log(erro);
                }
            );
        };

        function buscaContatos() {
            Contato.query(
                function(contatos) {
                    $scope.contatos = contatos;
                    $scope.mensagem = {};
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Não foi possível obter a lista'
                    };
                    console.log(erro);
                }
            );
        }
    }
})();