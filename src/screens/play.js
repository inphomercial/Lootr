'use strict';

Lootr.Screens.Play = {

    caption: "Play Screen",

    enter: function() {
        console.log("Entered Play Screen");

        // Start by creating OverWorld
        this._map = new Lootr.Maps.Overworld();
        this._map.getEngine().start();
        Lootr.World.addMap(this._map);

        console.log(Lootr.World);
    },

    renderGame: function ( display ) {
        console.log("refreshing");

        // Draw map first
        this._map.renderMap( display );
        //
        // Draw Items
        this._map.renderItems( display );
        //
        // Draw entities
        this._map.renderEntities( display );
    },

    renderHud: function ( display ) {
        display.drawText(1, 1, "HUD");
    },

    exit: function() {
        console.log("Exited Play Screen");
    }
}
