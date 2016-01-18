
var Lootr = ( function( window ) {

    var _gameDisplay = null;
    var _hudDisplay = null;
    var _GAME_DISPLAY_WIDTH = 100;
    var _GAME_DISPLAY_HEIGHT = 20;
    var _HUD_DISPLAY_WIDTH = 40;
    var _HUD_DISPLAY_HEIGHT = 20;

    function init() {
         console.log("Lootr Init Ran");

        _gameDisplay = new ROT.Display({width: _GAME_DISPLAY_WIDTH, height: _GAME_DISPLAY_HEIGHT});
        _hudDisplay = new ROT.Display({width: _HUD_DISPLAY_WIDTH, height: _HUD_DISPLAY_HEIGHT});
    }

    function run() {
        // processInput()
        // update()
        // render()
    }

    function getHudDisplay() {
        return _hudDisplay.getContainer();
    }

    function getGameDisplay() {
        return _gameDisplay.getContainer();
    }

    return {
        init: init,
        run: run,

        getHudDisplay: getHudDisplay,
        getGameDisplay: getGameDisplay
    }

})( window );
