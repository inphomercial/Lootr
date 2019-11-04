'use strict';

Lootr.Screens.InventoryDetail = {
    _caption: "Inventory Detail Screen",

    enter: function(gameDisplay, args) {
		LoggerDebug("Entered Inventory Detail Screen");

		this._gameDisplay = gameDisplay;
		
		this._item = args.selectedItem;
		this._entity = args.entity;
    },

    renderGame: function () {
		let index = 1;
		
		console.log(this._item);
		this._gameDisplay.drawText(1, index, "Inventory Detail Screen");
		this._gameDisplay.drawText(1, index += 2, this._item.getName());
		this._gameDisplay.drawText(1, index += 2, this._item.getDescription());

		this._gameDisplay.drawText(1, index++, 'Press d to drop item');

		if (this._item.hasComponent('Wieldable')) {
			this._gameDisplay.drawText(1, index++, 'Press e to equip item');
		}

		if (this._item.hasComponent('Edible')) {
			this._gameDisplay.drawText(1, index++, 'Press b to take a bite');
		}
		
    },

    exit: function() {
        LoggerDebug("Exited Inventory Detail Screen");
    },

    handleInput( inputType, inputData ) {
		switch(inputData.keyCode) {
			
			case ROT.KEYS.VK_ESCAPE:
				Lootr.switchScreen(Lootr.Screens.Inventory);
				break;
			
			case ROT.KEYS.VK_D:
				DropItemSystem(this._entity, this._item)
				Lootr.switchScreen(Lootr.Screens.Inventory);
				break;

			case ROT.KEYS.VK_E:
				if (!this._item.hasComponent('Wieldable')) {
					return;
				}

				EquipItemSystem(this._entity, this._item);
				Lootr.switchScreen(Lootr.Screens.Inventory);
				break;
				
			default:
				break;
		}
	}
}