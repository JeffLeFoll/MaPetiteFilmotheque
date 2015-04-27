'use strict';

var AccèsAuDisque = require('fs');
var DossierDeFilms = require('./DossierDeFilms');

function ListeurDeFilm () {
    
    var ensembleDeFilms = [];

     this.listerFilms = function (chemins) {

        chemins.forEach(traiterDossier);
        
        return ensembleDeFilms;
    };
    
    function traiterDossier(chemin) {
        var dossier = new DossierDeFilms();
        dossier.cheminDuDossier = chemin;
        
        dossier.listeDeFilms = AccèsAuDisque.readdirSync(chemin);
                
        ensembleDeFilms.push(dossier);
    }

}

module.exports = ListeurDeFilm;