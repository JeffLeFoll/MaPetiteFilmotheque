'use strict';

var AccèsAuDisque = require('fs');

function ListeurDeFilm () {
    
     this.listerFilms = function (chemin) {
       var fichiers = AccèsAuDisque.readdirSync(chemin);
       
       return fichiers;
    };
    
}



module.exports = ListeurDeFilm;