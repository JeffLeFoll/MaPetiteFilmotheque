'use strict';

require('chai').should();
var listeur = require('../../../sources/commandes/exploration/ListeurDeFilm');

describe('ListeurDeFilm', function(){
        it('doit retourner le nom des deux fichiers présent dans le répertoir tests/ressources', function(){
            var filmsDisponible = listeur();
            filmsDisponible.should.equal(3);
        });
});