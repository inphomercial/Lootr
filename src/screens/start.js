'use strict';

Lootr.Screens.start = {

    enter: function() {
        console.log("Enter");

    },

    renderGame: function ( display ) {
        var x = 0;
        function frame() {
            display.clear();
            display.drawText(x++, 2, "Game");

            if(x == Lootr.getGameDisplayWidth()) {
                clearInterval(id);
            }
        }

        var id = setInterval(frame, 50);
    },

    renderHud: function ( display ) {
        var y = 0;
        function frame() {
            display.clear();
            display.drawText(2, y++, "HUD");

            if(y == Lootr.getGameDisplayHeight()) {
                clearInterval(id);
            }
        }

        var id = setInterval(frame, 90);
    },

    exit: function() {
        console.log("Exit");
    }
}
