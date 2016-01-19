'use strict';

Lootr.Screens.Start = {
    caption: "Start Screen",

    enter: function() {
        console.log("Entered Start Screen");
    },

    renderGame: function ( display ) {
        console.log("renderGame Start Screen");

    //     var x = 0;
    //     function frame() {
    //         display.clear();
    //         display.drawText(x++, 2, "Game");
    //
    //         if(x == Lootr.getGameDisplayWidth()) {
    //             clearInterval(id);
    //         }
    //     }
    //
    //     var id = setInterval(frame, 50);
    },

    renderHud: function ( display ) {
        console.log("renderHud Start Screen");

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
    },

    exit: function() {
        console.log("Exited Start Screen");
    }
}
