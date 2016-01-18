
'use strict';

Lootr.Screens.play = {

    enter: function() {
        console.log("Entered Play");
    },

    renderGame: function ( display ) {
        display.drawText(13, 13, "HIIII");
    },

    renderHud: function ( display ) {
        display.drawText(4, 4, "HUD");
    },

    exit: function() {
        console.log("Exited Play");
    }
}
