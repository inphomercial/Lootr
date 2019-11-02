'use strict';

Lootr.Screens.InventoryDetail = {
    _caption: "Inventory Detail Screen",

    enter: function(gameDisplay, args) {
		DebugLogger("Entered Inventory Detail Screen");

		this._gameDisplay = gameDisplay;
		
		this._item = args.selectedItem;
		this._entity = args.entity;
    },

    renderGame: function () {

		console.log(this._item);
		this._gameDisplay.drawText(1, 1, "Inventory Detail Screen");
		this._gameDisplay.drawText(1, 3, this._item.getName());
		this._gameDisplay.drawText(1, 5, this._item.getDescription());

		this._gameDisplay.drawText(1, 9, 'Press d to drop item');

		if (this._item.hasComponent('Wieldable')) {
			this._gameDisplay.drawText(1, 10, 'Press e to equip item');
		}
		
    },

    exit: function() {
        DebugLogger("Exited Inventory Detail Screen");
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