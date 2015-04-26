'use strict';

var http = require('http');
var url = require("url");
var ListeurDeFilm = require('../ListeurDeFilm');

var port = 8080;

function start(){
    var server = http.createServer(traiterRequeteHttp);

    server.listen(port);
}

function traiterRequeteHttp (req, res) {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });

    var fonctionDemandee = url.parse(req.url).pathname;

    if (fonctionDemandee === '/listerFilm'){
        var Listeur = new ListeurDeFilm();

        Listeur.listerFilms(['E:\\Film'], function (films){
            var retour = JSON.stringify(films);

            res.write(retour);
            res.end();
        });
        
    } else {
        res.write('Fonction non implémentée');
        res.end();
    }


}

start();