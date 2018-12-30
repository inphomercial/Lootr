'use strict';

Lootr.Screens.WorldGeneration = {
    _caption: "World Generation Screen",

    enter: function( gameDisplay ) {
        console.log("Entered World Generation Screen");

		this._gameDisplay = gameDisplay;
		
		let newMap = new Overworld();
		Lootr.Screens.Play.map = newMap;
		Lootr.World.addMap(newMap);
    },

    renderGame: function () {
		this._gameDisplay.drawText(1, 1, "Generating World...");
    },

    exit: function() {
        console.log("Exited World Generation Screen");
    },

    handleInput( inputType, inputData ) {
        Lootr.switchScreen(new Display(Lootr.Screens.Play));
    }
}