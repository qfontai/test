'use strict';

var Engine = function () {

    //Private attributs and methods
    var plateauDeJeu;
    var couleur = {black: 0, white: 1, red: 2, green: 3, blue:4, yellow: 5};
    var joueurCourant = 1;

    var initialisationPlateau = function(){
        plateauDeJeu = [[color.black,color.green,color.white,color.blue,color.red,color.white],
            [color.yellow,color.white,color.green, color.red, color.yellow, color.blue],
            [color.blue, color.yellow, color.blue, color.white, color.black, color.red],
            [color.red, coor.black, color.red, color.green, color.blue, color.white],
            [color.white, color.green, color.yellow, color.black, color.yellow, color.green],
            [color.yellow, color.blue, color.black, color.red, color.green, color.black]];
        return 0;
    };

    //Public methods

    this.initialisation = function(){
        return (initialisationPlateau()===0) ? true : false;
    };

    this.getJoueurCourant = function(){
        return getJoueur(joueurCourant);
    };

    var getJoueur =function(joueur){
        return (joueur == 1)? "white":"black";
    };
};