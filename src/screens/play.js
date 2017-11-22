'use strict';

Lootr.Screens.Play = {

    caption: "Play Screen",

    enter: function( gameDisplay ) {
        console.log("Entered Play Screen");

		this._gameDisplay = gameDisplay;

        // Start by creating OverWorld
        this._map = new Lootr.Maps.Overworld();
        Lootr.Screens.Play.map = this._map;
        Lootr.World.addMap(this._map);
		
		this._map.getEngine().start();

        console.log(Lootr.World);
    },

    renderGame: function () {
        console.log("refreshing");

        // Draw map first
        this._map.renderMap( this._gameDisplay );
        //
        // Draw Items
        this._map.renderItems( this._gameDisplay );
        //
        // Draw entities
        this._map.renderEntities( this._gameDisplay );
    },

    exit: function() {
        console.log("Exited Play Screen");
    },

    handleInput: function ( inputType, inputData ) {
    }
}
