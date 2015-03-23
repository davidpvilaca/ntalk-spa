(function() {
    'use strict';

    angular.module("ntalk").controller("ContatosController", contatosCtrl);

    function contatosCtrl($resource) {
        /* jshint validthis: true */
        var vm = this;

        var Contato = $resource('/api/contatos/:id')
            , Teste = $resource('/api/teste');

        vm.contatos = [];
        vm.filtro = '';
        vm.mensagem = {texto: ''};
        vm.remove = removeCont;

        buscaContatos();
        buscaTeste();

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

        function buscaTeste() {
            Teste.query(
                function(data) {
                    vm.teste = data;
                },
            function(erro){
                console.log("Erro: \n" + textError + "\n");
            })
        }


        function removeCont(contato) {
            Contato.delete({id: contato._id},
                buscaContatos,
                function(erro) {
                    vm.mensagem = {texto: 'Não foi possível remover o contato'};
                    console.log(erro);
                }
            );
        }
    }
})();