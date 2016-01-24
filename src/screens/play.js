'use strict';

Lootr.Screens.Play = {

    caption: "Play Screen",

    enter: function() {
        console.log("Entered Play Screen");

        this._map = new Lootr.Maps.Overworld();
        Lootr.World.addMap(this._map);
        this._map.getEngine().start();

        console.log(Lootr.World);
    },

    renderGame: function ( display ) {
        console.log("refreshing");

        // Draw map first
        this._map.renderMap( display );
        //
        // Draw Items
        //
        // Draw entities
        this._map.renderEntities( display );
    },

    renderHud: function ( display ) {
        display.drawText(4, 4, "HUD");
    },

    exit: function() {
        console.log("Exited Play Screen");
    }
}
