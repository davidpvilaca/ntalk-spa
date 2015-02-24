//todo terminar a conexao com o banco de dados

var mongoose = require('mongoose');

module.exports = function (uri) {
    mongoose.connect(uri);
};