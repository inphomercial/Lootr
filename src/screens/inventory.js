'use strict';

Lootr.Screens.Inventory = {
    _caption: "Inventory Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Inventory Screen");

        this._gameDisplay = gameDisplay;
    },

    renderGame: function () {
		let player = Lootr.getPlayer();
		let inventory = player.getComponent("Inventory").inventory;

		this._gameDisplay.drawText(1, 1, "Inventory Screen");

		let startingPostition = 3;
		for (let index = 0; index < inventory.length; index++) {
			const item = inventory[index];
		
			this._gameDisplay.drawText(1, index+startingPostition, item);
		}
    },

    exit: function() {
        console.log("Exited Start Screen");
    },

    handleInput( inputType, inputData ) {
        Lootr.switchScreen(Lootr.Screens.Play);
    }
}