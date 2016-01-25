'use strict';

Lootr.Screens.Start = {
    caption: "Start Screen",

    enter: function() {
        console.log("Entered Start Screen");

        console.log("Generating world!");
        Lootr.World = new Lootr.WorldHolder();
    },

    renderGame: function ( display ) {
        display.drawText(1, 1, "Lootr 2014 - 2016");
    },

    renderHud: function ( display ) {
        display.drawText(1, 1, "Lootr 2014 - 2016");
    },

    exit: function() {
        console.log("Exited Start Screen");
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
