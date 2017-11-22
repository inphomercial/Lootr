'use strict';

Lootr.Screens.Start = {
    caption: "Start Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Start Screen");

        this._gameDisplay = gameDisplay;

        console.log("Generating world!");
        Lootr.World = new Lootr.WorldHolder();
    },

    renderGame: function () {
        console.log("Start renderGame Screen");
        this._gameDisplay.drawText(1, 1, "Lootr 2014 - 2016");
    },

    exit: function() {
        console.log("Exited Start Screen");
    },

    handleInput( inputType, inputData ) {
        console.log(this._caption);

        Lootr.switchScreen(new Lootr.Screens.Display(Lootr.Screens.Play));
    }
}