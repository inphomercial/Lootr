'use strict';

Lootr.Screens.Help = {
    _caption: "Help Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Help Screen");

        this._gameDisplay = gameDisplay;
    },

    renderGame: function () {
		this._gameDisplay.drawText(1, 1, "Help Screen");

		this._gameDisplay.drawText(1, 3, "w a s d - Move around.");
		this._gameDisplay.drawText(1, 4, "i - Look at inventory.");
		this._gameDisplay.drawText(1, 5, "? - Open Help.");
		this._gameDisplay.drawText(1, 6, ". - Pick up item.");
    },

    exit: function() {
        console.log("Exited Help Screen");
    },

    handleInput( inputType, inputData ) {
        Lootr.switchScreen(Lootr.Screens.Play);
    }
}