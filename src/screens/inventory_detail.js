'use strict';

Lootr.Screens.InventoryDetail = {
    _caption: "Inventory Detail Screen",

    enter: function( gameDisplay, item ) {
		console.log("Entered Inventory Detail Screen");
		console.log('Inventory Details', item);

		this._gameDisplay = gameDisplay;
		
		this._item = item;
    },

    renderGame: function () {
		this._gameDisplay.drawText(1, 1, "Inventory Detail Screen");
		this._gameDisplay.drawText(1, 3, this._item.getName());
		this._gameDisplay.drawText(1, 5, this._item.getDescription());
    },

    exit: function() {
        console.log("Exited Inventory Detail Screen");
    },

    handleInput( inputType, inputData ) {
		switch(inputData.keyCode) {
			
			case ROT.KEYS.VK_ESCAPE:
				Lootr.switchScreen(Lootr.Screens.Inventory);
				break;

			default:
				break;
		}
	}
}