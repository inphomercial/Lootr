
var Lootr = ( function( window ) {

    _gameDisplay = null;
    _hudDisplay = null;
    _GAME_DISPLAY_WIDTH = 20;
    _GAME_DISPLAY_HEIGHT = 20;

    function init() {
        console.log("Lootr Init Ran");
        this._gameDisplay = new ROT.Display({width: 100, height: 20});
        this._hudDisplay = new ROT.Display({width: 30, height: 20});
    }

    function run() {
        // processInput()
        // update()
        // render()
    }

    function getHudDisplay() {
        return this._hudDisplay.getContainer();
    }

    function getGameDisplay() {
        return this._gameDisplay.getContainer();
    }

    return {
        init: init,
        run: run,

        getHudDisplay: getHudDisplay,
        getGameDisplay: getGameDisplay
    }

})( window );
