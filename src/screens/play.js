'use strict';

Lootr.Screens.Play = {

    _caption: "Play Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Play Screen");

		this._gameDisplay = gameDisplay;
		
		this.map.getEngine().start();
    },

    renderGame: function () {
		Lootr.getGameDisplay().clear();

        // Draw map first
        this.map.renderMap( this._gameDisplay, Lootr.getPlayer().getCoordinates() );
        //
        // Draw Items
        this.map.renderItems( this._gameDisplay, Lootr.getPlayer().getCoordinates() );
        //
        // Draw entities
		this.map.renderEntities( this._gameDisplay, Lootr.getPlayer().getCoordinates() );

		// Draw Player Stats
		Lootr.UI.renderPlayerStats(Lootr.getPlayer());
    },

    exit: function() {
        console.log("Exited Play Screen");
    },

    handleInput: function ( inputType, inputData ) {
		//console.log('Equipment screen input', inputType, inputData);
    }
}
