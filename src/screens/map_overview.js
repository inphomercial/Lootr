'use strict';

Lootr.Screens.MapOverview = {
    _caption: "Map Overview Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Map Overview Screen");

		this._gameDisplay = gameDisplay;
		
        this._player = Lootr.getPlayer();
        
        this._cursor = this._player.getCoordinates();
    },

    renderGame: function () {
        // Draw map first
        Lootr.getPlayer().getMap().renderMapOverview(this._gameDisplay, this._cursor);
    },

    exit: function() {
        console.log("Exited Map Overview Screen");
    },

    handleInput( inputType, inputData ) {
		switch(inputData.keyCode) {
			case ROT.KEYS.VK_DOWN:
				this._cursor[1] += 1;

				break;
			
			case ROT.KEYS.VK_UP:
                this._cursor[1] -= 1;

				break;

			case ROT.KEYS.VK_ESCAPE:
				Lootr.switchScreen(Lootr.Screens.Play);
				break; 

			default:
				break;
		}
	}


}