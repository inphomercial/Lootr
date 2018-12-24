'use strict';

Lootr.Screens.Inventory = {
    _caption: "Inventory Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Inventory Screen");

        this._gameDisplay = gameDisplay;
    },

    renderGame: function () {
        console.log("Start Inventory Screen");
        this._gameDisplay.drawText(1, 1, "Lootr 2014 - 2017");
        this._gameDisplay.drawText(1, 3, "Generating world..");
    },

    exit: function() {
        console.log("Exited Start Screen");
    },

    handleInput( inputType, inputData ) {
        Lootr.switchScreen(new Display(Lootr.Screens.Play));
    }
}