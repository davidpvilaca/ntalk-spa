/**
 * Created by douglas on 29/01/15.
 */


//TODO continua no 2.8 do livro MEAN

var http = require('http')
    , app = require('./config/express')();
//require('./config/database')('mongodb://localhost/ntalk');

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express escutando na porta ' + app.get('port'));
});