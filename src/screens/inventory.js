'use strict';

Lootr.Screens.Inventory = {
    _caption: "Inventory Screen",

    enter: function( gameDisplay ) {
        LoggerDebug("Entered Inventory Screen");

			this._gameDisplay = gameDisplay;
			
			this._player = Lootr.getPlayer();
			this._inventory = this._player.getComponent("Inventory").inventory;

			this._selectedIndex = 3;
			this._startingPostition = 3;
			this._endingPosition = this._inventory.length + this._startingPostition - 1;
			this._selectedItem = '';
    },

    renderGame: function () {
		this._gameDisplay.drawText(1, 1, "Inventory Screen");

		if (!this._inventory.length) {
			this._gameDisplay.drawText(1, 4, "You are carrying nothing.");

			return;
		}

		for (let index = 0; index < this._inventory.length; index++) {
			const item = this._inventory[index];
			const selected = this._selectedIndex == (index + this._startingPostition) ? '>' : '%c{black}>%c{grey}';
			const fullText = `${selected} ${item.getName()}`;
		
			this._gameDisplay.drawText(1, index+this._startingPostition, fullText);
		}
    },

    exit: function() {
        LoggerDebug("Exited Inventory Screen");
    },

    handleInput( inputType, inputData ) {
		LoggerDebug('Inventory screen input', inputType, inputData);

		switch(inputData.keyCode) {
			case ROT.KEYS.VK_DOWN:
				if(this._selectedIndex == this._endingPosition) {
					return;
				}

				this._selectedIndex++;
				this._selectedItem = this._inventory[this._selectedIndex - this._startingPostition] ;

				break;
			
			case ROT.KEYS.VK_UP:
				if(this._selectedIndex == this._startingPostition) {
					return;
				}

				this._selectedIndex--;
				this._selectedItem = this._inventory[this._selectedIndex - this._startingPostition];

				break;

			case ROT.KEYS.VK_ESCAPE:
				Lootr.switchScreen(Lootr.Screens.Play);
				break;
			
			case ROT.KEYS.VK_RETURN:
			case ROT.KEYS.VK_ENTER:
				this._selectedItem = this._inventory[this._selectedIndex - this._startingPostition];

				const args = {
					entity: this._player,
					selectedItem: this._selectedItem
				}

				Lootr.switchSubScreen(Lootr.Screens.InventoryDetail, args);
				break;

			default:
				break;
		}

		Lootr.refreshScreens();
	}
}