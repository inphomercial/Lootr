'use strict';

Lootr.Screens.start = {

    enter: function() {
        console.log("Enter");
    },

    renderGame: function ( display ) {
        display.drawText(10, 10, "HIIII");
    },

    renderHud: function ( display ) {
        display.drawText(2, 2, "HUD");
    },

    exit: function() {
        console.log("Exit");
    }
}
