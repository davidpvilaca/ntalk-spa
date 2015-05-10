/**
 * Created by douglas on 10/05/15.
 */

describe("ContatoController", function(){
    it("Deve criar um contato vazio quando nenhum parâmetro de rota for passado", function(){
        expected($scope.contato._id).toBeUndefined();
    });
});