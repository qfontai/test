'use strict';

var Engine = function () {

    //Private attributs and methods
    var plateauDeJeu;
    var couleur = {black: 0, white: 1, red: 2, green: 3, blue:4, yellow: 5};
    var joueurCourant = 1;

    var joueurPieces = [[0,0,0,0,0,0],[0,0,0,0,0,0]];

    var initialisationPlateau = function(){
        plateauDeJeu = [[couleur.black,couleur.green,couleur.white, couleur.blue, couleur.red, couleur.white],
            [couleur.yellow, couleur.white, couleur.green, couleur.red, couleur.yellow, couleur.blue],
            [couleur.blue, couleur.yellow, couleur.blue, couleur.white, couleur.black, couleur.red],
            [couleur.red, couleur.black, couleur.red, couleur.green, couleur.blue, couleur.white],
            [couleur.white, couleur.green, couleur.yellow, couleur.black, couleur.yellow, couleur.green],
            [couleur.yellow, couleur.blue, couleur.black, couleur.red, couleur.green, couleur.black]];
        return 0;
    };

    // Transforme i et j en caracteres
    var getChar = function (str) {
        var i = str.charCodeAt(0) - "A".charCodeAt(0);
        var j = str.charCodeAt(1) - "1".charCodeAt(0);

        return {"i" : i, "j" : j};
    };
    //Public methods

    var init  = function(){
        initialisationPlateau();
    };

    this.validPlateau = function(){
      var i, j ;
        for(i=0;i<5 ; i++){
            for(j=0; j<5;j++){
                if(plateauDeJeu[i][j] === plateauDeJeu[i][j+1] || plateauDeJeu[i][j] === plateauDeJeu[i+1][j]){
                    return false;
                }
            }
        }
        return true;
    };

    this.jouerCoup = function (str) {
        var coup = getChar(str);
        if (coup.i <= 6 && coup.j <= 6) {
            var color = plateauDeJeu[coup.j][coup.i];
            plateauDeJeu[coup.j][coup.i] = -1;
            joueurPieces[joueurCourant - 1][color]++;
        }
    };

    // Pieces dont on dispose l'indice
    this.case = function (str) {
        var coup = getChar(str);
        return plateauDeJeu[coup.j][coup.i];
    };

    //Nombre de pieces sur le plateau
    this.nbPieces = function () {
        var i, j, cpt = 0;
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 6; j++) {
                if (plateauDeJeu[i][j] !== -1) {
                    cpt++;
                }
            }
        }
        return cpt;
    };

    // Pieces prises par le joueur lors de son coup + couleur
    this.nbCouleurPrisesJoueur = function (joueur, c) {
        return joueurPieces[joueur - 1][couleur[c]];
    };

    init();
};