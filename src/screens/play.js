'use strict';

Lootr.Screens.Play = {

    caption: "Play Screen",

    enter: function( gameDisplay, hudDisplay, logDisplay ) {
        console.log("Entered Play Screen");

		this._gameDisplay = gameDisplay;
        this._hudDisplay = hudDisplay;
        this._logDisplay = logDisplay;

        // Start by creating OverWorld
        this._map = new Lootr.Maps.Overworld();
        Lootr.Screens.Play.map = this._map;
        // Lootr.Screens.Play._map = this._map;
        this._map.getEngine().start();
        Lootr.World.addMap(this._map);

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

    renderHud: function () {
        this._hudDisplay.drawText(1, 1, "HUD");
    },

    renderLog: function () {
        console.log("Start renderLog Screen");
        this._logDisplay.drawText(1, 1, "Lootr 2014 - 2016");
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
                Lootr.Screens.Play.doMove(-1, 0);
                break;

            case ROT.VK_RIGHT:
                Lootr.Screens.Play.doMove(1, 0);
                break;

            case ROT.VK_UP:
                Lootr.Screens.Play.doMove(0, -1);
                break;

            case ROT.VK_DOWN:
                Lootr.Screens.Play.doMove(0, 1);
                break;
        }
    },

    doMove: function(dX, dY) {
        console.log("Trying to move");

        var newX = Lootr.getPlayer().getX() + dX;
        var newY = Lootr.getPlayer().getY() + dY;

        if (Lootr.Screens.Play.map.isTileSolid(newX, newY)) {
			console.log("tile is solid ");
			return;
		}

        // Try to move
        // Detected edges
        // Lootr.getPlayer().tryMove(newX, newY);
        Lootr.getPlayer().setX(newX);
        Lootr.getPlayer().setY(newY);

        // All things update/move/etc

        Lootr.refreshScreens();
    },
}
