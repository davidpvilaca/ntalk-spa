//todo terminar a conexao com o banco de dados

var mongoose = require('mongoose');

module.exports = function (uri) {
    mongoose.connect(uri);

    mongoose.connection.on('connected', conectado);
    mongoose.connection.on('disconnected', desconectado);
    mongoose.connection.on('error', falha);

    process.on('SIGINT', fechaConexao);
};

function conectado() {
    console.log('Mongoose! Conectado em ' + uri);
}

function desconectado() {
    console.log('Mongoose! Desconectado em ' + uri);
}

function falha(erro) {
    console.log('Mongoose! Erro na conexao: ' + erro);
}

function fechaConexao() {
    mongoose.connection.close(function () {
        console.log('Mongoose! Desconectado pelo termino da aplicacao');

        // 0 indica que a aplicacao foi finalizada sem erros
        process.exit(0);
    });
}