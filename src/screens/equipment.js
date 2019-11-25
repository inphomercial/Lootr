'use strict';

Lootr.Screens.Equipment = {
	_caption: "Equipment Screen",

	enter: function( gameDisplay ) {
		LoggerDebug("Entered Equipment Screen");
		
		this._gameDisplay = gameDisplay;
	},

	renderGame: function () {
		let player = Lootr.getPlayer();

		this._gameDisplay.drawText(1, 1, "Equipment Screen");

		let equipment = player.getComponent("Slots").slots;
		let startingPostition = 3;

		Object.keys(equipment).forEach(slot => {
			const slotText = Lootr.EntitySystems.Slots.getProperSlotName(slot);
			const itemNameText = (equipment[slot] == '') ? '' : equipment[slot].getName();

			const fullText = `${slotText}: ${itemNameText}`;
			
			this._gameDisplay.drawText(1, startingPostition, fullText);
			startingPostition++;
		});
	},

	exit: function() {
		LoggerDebug("Exited Equipment Screen");
	},

	handleInput( inputType, inputData ) {
		Lootr.switchScreen(Lootr.Screens.Play);
	}
}