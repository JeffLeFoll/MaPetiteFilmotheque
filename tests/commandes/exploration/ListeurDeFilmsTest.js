'use strict';

require('chai').should();
var ListeurDeFilm = require('../../../sources/commandes/exploration/ListeurDeFilm');

var indicateurFinDeTest;

describe('Listeur De Film', function () {
    
        it('doit retourner un object contenant les noms des deux fichiers x 2 présent dans le répertoir tests/ressources', function (done) {
            indicateurFinDeTest = done;
            var chemins = new Array("./tests/ressources/", "./tests/ressources/");
            var Listeur = new ListeurDeFilm();
            
            Listeur.listerFilms(chemins, traiterRésultat);

        });
});

function traiterRésultat(films){
    var filmsDisponible = films.toString().split(',');

    filmsDisponible.should.have.length(4);
    filmsDisponible[0].should.equal("clip.mkv");
    filmsDisponible[1].should.equal("film1.avi");
    filmsDisponible[2].should.equal("clip.mkv");
    filmsDisponible[3].should.equal("film1.avi");

    indicateurFinDeTest();
 }
 
