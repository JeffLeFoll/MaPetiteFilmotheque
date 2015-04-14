'use strict';

require('chai').should();
var ListeurDeFilm = require('../../../sources/commandes/exploration/ListeurDeFilm');

describe('ListeurDeFilm', function () {
    
        it('doit retourner le nom des deux fichiers présent dans le répertoir tests/ressources', function () {
            var filmsDisponible = new ListeurDeFilm().listerFilms("./tests/ressources/");

            filmsDisponible.should.have.length(2);
            filmsDisponible[0].should.equal("clip.mkv");
            filmsDisponible[1].should.equal("film1.avi");
        });
});