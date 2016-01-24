'use strict';

Lootr.Screens.Play = {

    caption: "Play Screen",

    enter: function() {
        console.log("Entered Play Screen");

        this._map = new Lootr.Maps.Overworld();
        Lootr.World.addMap(this._map);
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
        //
        // Draw Player
        //Lootr.getGameDisplay().draw(10, 10, this._player.getForeground(), this._player.getBackground());

        // for(var i = 0; i < Lootr.getGameDisplayWidth(); i++) {
        //     var t = new Lootr.Tile(Lootr.Tiles.wallTile);
        //     display.draw(i, i, t.getChar(), t.getForeground(), t.getBackground());
        // }



    },

    renderHud: function ( display ) {
        display.drawText(4, 4, "HUD");
    },

    exit: function() {
        console.log("Exited Play Screen");
    }
}
