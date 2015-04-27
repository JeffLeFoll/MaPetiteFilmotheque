'use strict';

require('chai').should();
var ListeurDeFilm = require('../sources/ListeurDeFilm');

describe('Listeur De Films', function () {
    
        it('doit retourner un tableau contenant 2 objets DossierDeFilms', function () {
            var chemins = ['./tests/ressources/', './tests/ressources/'];
            var Listeur = new ListeurDeFilm();
            
            var filmsDisponible = Listeur.listerFilms(chemins);
            
            filmsDisponible.should.have.length(2);
            vérifierDossier(filmsDisponible[0]);
            vérifierDossier(filmsDisponible[1]);
        });
});


function vérifierDossier(dossier){
    dossier.listeDeFilms.should.have.length(2);
    dossier.listeDeFilms[0].should.equal('clip.mkv');
    dossier.listeDeFilms[1].should.equal('film1.avi');
    dossier.cheminDuDossier.should.equal('./tests/ressources/');
}