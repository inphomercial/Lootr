'use strict';

Lootr.Screens.Start = {
    _caption: "Start Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Start Screen");

        this._gameDisplay = gameDisplay;

        Lootr.World = new Lootr.WorldHolder();
    },

    renderGame: function () {
        console.log("Start renderGame Screen");
        this._gameDisplay.drawText(1, 1, "Lootr 2014 - 2017");
    },

    exit: function() {
        console.log("Exited Start Screen");
    },

    handleInput( inputType, inputData ) {
        Lootr.switchScreen(new Display(Lootr.Screens.WorldGeneration));
    }
}