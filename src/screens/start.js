'use strict';

Lootr.Screens.Start = {
    _caption: "Start Screen",

    enter: function( gameDisplay ) {
        DebugLogger("Entered Start Screen");

        this._gameDisplay = gameDisplay;

        Lootr.World = new Lootr.WorldHolder();
    },

    renderGame: function () {
        DebugLogger("Start renderGame Screen");
        
        this._gameDisplay.drawText(1, 1, "Lootr 2014 - 2019");
    },

    exit: function() {
        DebugLogger("Exited Start Screen");
    },

    handleInput( inputType, inputData ) {
        Lootr.switchScreen(new Display(Lootr.Screens.WorldGeneration));
    }
}