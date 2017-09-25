'use strict';

Lootr.Screens.Start = {
    caption: "Start Screen",

    enter: function( gameDisplay, hudDisplay, logDisplay ) {
        console.log("Entered Start Screen");

        this._gameDisplay = gameDisplay;
        this._hudDisplay = hudDisplay;
        this._logDisplay = logDisplay;

        console.log("Generating world!");
        Lootr.World = new Lootr.WorldHolder();
    },

    renderGame: function () {
        console.log("Start renderGame Screen");
        this._gameDisplay.drawText(1, 1, "Lootr 2014 - 2016");
    },

    renderHud: function () {
        console.log("Start renderHud Screen");
        this._hudDisplay.drawText(1, 1, "Hud Display initializing..");
    },

    renderLog: function () {
        console.log("Start renderLog Screen");
        this._logDisplay.drawText(1, 1, "Log Display initializing..");
    },

    exit: function() {
        console.log("Exited Start Screen");
    },

    handleInput( inputType, inputData ) {
        console.log(this._caption);

        Lootr.switchScreen(new Lootr.Screens.Display(Lootr.Screens.Play));
    }
}

// var y = 0;
// function frame() {
//     display.clear();
//     display.drawText(2, y++, "HUD");
//
//     if(y == Lootr.getGameDisplayHeight()) {
//         clearInterval(id);
//     }
// }
//
// var id = setInterval(frame, 90);
