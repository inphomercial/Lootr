'use strict';

Lootr.Screens.Equipped = {
    _caption: "Equipped Inventory Screen",

    enter: function( gameDisplay ) {
        DebugLogger("Entered Equipped Inventory Screen");

			this._gameDisplay = gameDisplay;
			
			this._player = Lootr.getPlayer();
			this._slots = this._player.getComponent("Slots").slots;
			this._keys = Object.keys(this._slots);

			this._selectedIndex = 3;
			this._startingPostition = 3;
			this._endingPosition = this._keys.length + this._startingPostition - 1;
			this._selectedItem = '';
    },

    renderGame: function () {
		this._gameDisplay.drawText(1, 1, "Equipped Items Screen");

		if (!this._keys.length) {
			this._gameDisplay.drawText(1, 4, "You are carrying nothing.");

			return;
		}

		for (let index = 0; index < this._keys.length; index++) {

			let item = Lootr.EntitySystems.Slots.getItemFromSlot(this._player, this._keys[index]);
			let itemName = item ? item.getName() : 'none';

			const slot = this._keys[index];
			const selected = this._selectedIndex == (index + this._startingPostition) ? '>' : '%c{black}>%c{grey}';
			const fullText = `${selected} ${ slot } -- ${ itemName }`;
		
			this._gameDisplay.drawText(1, index+this._startingPostition, fullText);
		}
    },

    exit: function() {
        DebugLogger("Exited Equipped Inventory Screen");
    },

    handleInput( inputType, inputData ) {
		DebugLogger('Equipped Inventory screen input', inputType, inputData);

		switch(inputData.keyCode) {
			case ROT.KEYS.VK_DOWN:
				if(this._selectedIndex == this._endingPosition) {
					return;
				}

				this._selectedIndex++;
				this._selectedItem = this._keys[this._selectedIndex - this._startingPostition] ;

				break;
			
			case ROT.KEYS.VK_UP:
				if(this._selectedIndex == this._startingPostition) {
					return;
				}

				this._selectedIndex--;
				this._selectedItem = this._keys[this._selectedIndex - this._startingPostition];

				break;

			case ROT.KEYS.VK_ESCAPE:
				Lootr.switchScreen(Lootr.Screens.Play);
				break;
			
			case ROT.KEYS.VK_RETURN:
			case ROT.KEYS.VK_ENTER:
				this._selectedSlot = this._keys[this._selectedIndex - this._startingPostition];

				this._selectedItem = Lootr.EntitySystems.Slots.getItemFromSlot(this._player, this._selectedSlot);

				if (this._selectedItem === '') {
					return;
				}

				const args = {
					entity: this._player,
					selectedItem: this._selectedItem
				}

				Lootr.switchSubScreen(Lootr.Screens.EquippedDetail, args);

				break;

			default:
				break;
		}

		Lootr.refreshScreens();
	}
}