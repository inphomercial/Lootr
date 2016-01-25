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
    },

    handleInput: function ( inputType, inputData ) {
        console.log("pressed a button");
        console.log(inputType);
        console.log(inputData);

        // Any key press
        switch(inputData.keyCode) {
            case ROT.VK_LEFT:
                doMove(-1, 0);
                break;

            case ROT.VK_RIGHT:
                doMove(1, 0);
                break;

            case ROT.VK_UP:
                doMove(0, -1);
                break;

            case ROT.VK_DOWN:
                doMove(0, 1);
                break;
        }
    },

    doMove: function(dX, dY) {
        console.log("Trying to move");

        var newX = this._player.getX() + dX;
        var newY = this._player.getY() + dY;

        // Try to move
        this._player.tryMove(newX, newY);
    },
}
