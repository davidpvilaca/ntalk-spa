/**
 * Created by douglas on 29/01/15.
 */

var express = require('express')
    , load = require('express-load')
    , bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    //configuração de ambiente
    app.set('port', 3000);

    //middleware
    app.use(express.static('./public'));
    /*app.set('view engine', 'ejs');
    app.set('views', './app/views');*/

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};