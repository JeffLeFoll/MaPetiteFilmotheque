'use strict';

var AccèsAuDisque = require('fs');

function ListeurDeFilm () {
    
    var ensembleDeFilms = [];
    var nombreDeDossiersALister;
    var nombreDeDossierListé;
    var retourListerContenuDossier;
    
     this.listerFilms = function (chemins, fonctionRetour) {
        retourListerContenuDossier = fonctionRetour;
        nombreDeDossiersALister = chemins.length;
        nombreDeDossierListé = 0;

        chemins.forEach(function (chemin) {
            AccèsAuDisque.readdir(chemin, listerContenuDossier);
         });
    };
    
    function listerContenuDossier (err, fichiers) {
        if (err) return console.error(err);
        
        nombreDeDossierListé++;
        
        fichiers.forEach(function (fichier) {
            ensembleDeFilms.push(fichier);
         });

        if(nombreDeDossiersALister == nombreDeDossierListé){
            retourListerContenuDossier(ensembleDeFilms);
        }
         
    }
    
}



module.exports = ListeurDeFilm;