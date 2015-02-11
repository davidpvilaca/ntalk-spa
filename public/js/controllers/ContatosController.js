/**
 * Created by douglas on 29/01/15.
 */

angular.module("ntalk").controller("ContatosController", function($resource, $scope) {
    $scope.contatos = [];
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    var Contato = $resource('/api/contatos/:id');

    //codigo para busca no banco
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
    buscaContatos();

    $scope.remove = function (contato) {
        Contato.delete({id: contato._id},
            buscaContatos,
            function(erro) {
                $scope.mensagem = {texto: 'Não foi possível remover o contato'};
                console.log(erro);
            }
        );
    };
});
