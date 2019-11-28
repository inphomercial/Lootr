'use strict';

Lootr.Screens.Help = {
	_caption: "Help Screen",

	enter: function( gameDisplay ) {
		LoggerDebug("Entered Help Screen");

		this._gameDisplay = gameDisplay;
	},

	renderGame: function () {
		this._gameDisplay.drawText(1, 1, "Help Screen");

		this._gameDisplay.drawText(1, 3, "w a s d - Move around.");
		this._gameDisplay.drawText(1, 4, "i - Look at inventory.");
		this._gameDisplay.drawText(1, 5, "e - Manage Equipment.");
		this._gameDisplay.drawText(1, 6, "o - Autoexplore.");
		this._gameDisplay.drawText(1, 7, "h - Open Help.");
		this._gameDisplay.drawText(1, 8, ". - Pick up item.");
		this._gameDisplay.drawText(1, 9, "c - Character stats");
		this._gameDisplay.drawText(1, 10, "a - Abilities");
	},

	exit: function() {
		LoggerDebug("Exited Help Screen");
	},

	handleInput( inputType, inputData ) {
		Lootr.switchScreen(Lootr.Screens.Play);
	}
}