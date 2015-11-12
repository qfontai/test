'use strict';

var Engine = function () {

    //Private attributs and methods
    var plateauDeJeu;
    var couleur = {black: 0, white: 1, red: 2, green: 3, blue:4, yellow: 5};

    var initialisationPlateau = function(){
        plateauDeJeu = [[0, 3, 1, 4, 2, 1],
            [5, 1, 3, 2, 5, 4],
            [4, 5, 4, 1, 0, 2],
            [2, 0, 2, 3, 4, 1],
            [1, 3, 5, 0, 5, 3],
            [5, 4, 0, 2, 3, 0]];
        return 0;
    };

    //Public methods

    this.initialisation = function(){
        return (initialisationPlateau()===0) ? true : false;
    };
};