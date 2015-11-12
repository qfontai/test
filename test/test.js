'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

//Test d'initialisation du plateau
PalettoTestCase.prototype.testStory1 = function () {
    var e = new Engine();
    assertTrue(e.initialisation());
};

//Test
PalettoTestCase.prototype.testStory2 = function() {
    var e= new Engine();
    assertTrue(e.getJoueurCourant() == "blanc");
};