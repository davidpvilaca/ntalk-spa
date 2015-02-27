(function() {
    'use strict';

    angular.module("ntalk").controller("ContatosController", contatosCtrl);

    function contatosCtrl($resource) {
        /* jshint validthis: true */
        var vm = this;

        var Contato = $resource('/api/contatos/:id');

        vm.contatos = [];
        vm.filtro = '';
        vm.mensagem = {texto: ''};
        vm.remove = removeCont;
        buscaContatos();

        function removeCont(contato) {
            Contato.delete({id: contato._id},
                buscaContatos,
                function(erro) {
                    vm.mensagem = {texto: 'Não foi possível remover o contato'};
                    console.log(erro);
                }
            );
        }

        function buscaContatos() {
            Contato.query(
                function(contatos) {
                    vm.contatos = contatos;
                    vm.mensagem = {};
                },
                function (erro) {
                    vm.mensagem = {
                        texto: 'Não foi possível obter a lista'
                    };
                    console.log(erro);
                }
            );
        }
    }
})();