'use strict';

Lootr.Screens.Play = {
    caption: "Play Screen",

    enter: function() {
        console.log("Entered Play Screen");
    },

    renderGame: function ( display ) {
        display.drawText(13, 13, "HIIII");
        // for(var i = 0; i < Lootr.getGameDisplayWidth(); i++) {
        //     var t = new Lootr.Tile(Lootr.Tiles.wallTile);
        //     display.draw(i, i, t.getChar(), t.getForeground(), t.getBackground());
        // }

        var map = new Lootr.Maps.Overworld();
        Lootr.World.addMap(map);
        console.log(Lootr.World);

        map.renderMap( display );
    },

    renderHud: function ( display ) {
        display.drawText(4, 4, "HUD");
    },

    exit: function() {
        console.log("Exited Play Screen");
    }
}
