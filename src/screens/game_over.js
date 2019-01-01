'use strict';

Lootr.Screens.GameOver = {
    _caption: "Game Over Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Game Over Screen");

        this._gameDisplay = gameDisplay;
    },

    renderGame: function () {
		let player = Lootr.getPlayer();

		this._gameDisplay.drawText(1, 1, "Game Over Screen");
    },

    exit: function() {
        console.log("Exited Game Over Screen");
    },

    handleInput( inputType, inputData ) {
		Logger("Resurrecting!!")
		
		let player = Lootr.getPlayer();
		player.getComponent('Health').hp = player.getComponent('Health').maxHp;

        Lootr.switchScreen(Lootr.Screens.Play);
    }
}