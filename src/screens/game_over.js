'use strict';

Lootr.Screens.GameOver = {
    _caption: "Game Over Screen",

    enter: function( gameDisplay ) {
        DebugLogger("Entered Game Over Screen");

        this._gameDisplay = gameDisplay;
    },

    renderGame: function () {
		let player = Lootr.getPlayer();

		this._gameDisplay.drawText(1, 1, "Game Over Screen");
		this._gameDisplay.drawText(1, 3, "You have DIED!");
    },

    exit: function() {
        DebugLogger("Exited Game Over Screen");
    },

    handleInput( inputType, inputData ) {
		switch(inputData.keyCode) {
			case ROT.KEYS.VK_RETURN:
			case ROT.KEYS.VK_ENTER:
				Logger("Resurrecting!!")
				
				let player = Lootr.getPlayer();
				player.getComponent('Health').hp = player.getComponent('Health').maxHp;

				Lootr.switchScreen(Lootr.Screens.Play);
				break;

			default:
				break;
		}
    }
}