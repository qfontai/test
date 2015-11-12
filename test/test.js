'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

//Test d'initialisation du plateau
PalettoTestCase.prototype.testStory1 = function () {
    var e = new Engine();
    assertTrue(e.validPlateau());
};

//Test si la case A6 a été joué
PalettoTestCase.prototype.testStory2 = function () {
    var e = new Engine();
    e.jouerCoup("A6");
};

PalettoTestCase.prototype.testStory3 = function () {
    var e = new Engine();
    e.jouerCoup("A6");
    assertEquals(e.case("A6"),-1);
    assertEquals(e.nbPieces(),35);
    assertEquals(e.nbCouleurPrisesJoueur(1,"yellow"),1);
};