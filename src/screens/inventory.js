'use strict';

Lootr.Screens.Inventory = {
    _caption: "Inventory Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Inventory Screen");

		this._gameDisplay = gameDisplay;
		
		this._selectedIndex = 3;
    },

    renderGame: function () {
		let player = Lootr.getPlayer();
		let inventory = player.getComponent("Inventory").inventory;

		this._gameDisplay.drawText(1, 1, "Inventory Screen");

		let startingPostition = 3;
		for (let index = 0; index < inventory.length; index++) {
			const item = inventory[index];

			let selected = this._selectedIndex == index+startingPostition ? '>' : '%c{black}>%c{grey}';
			let fullText = `${selected} ${item.getName()}`;
		
			this._gameDisplay.drawText(1, index+startingPostition, fullText);
		}
    },

    exit: function() {
        console.log("Exited Inventory Screen");
    },

    handleInput( inputType, inputData ) {
		switch(inputData.keyCode) {
			case ROT.KEYS.VK_DOWN:
				this._selectedIndex++;
				break;
			
			case ROT.KEYS.VK_UP:
				this._selectedIndex--;
				break;

			case ROT.KEYS.VK_ESCAPE:
				Lootr.switchScreen(Lootr.Screens.Play);
				break;

			default:
				break;
		}
	}
}