'use strict';

var Lootr = ( function( window ) {

    var _gameDisplay = null;
    var _hudDisplay = null;
    var _currentScreen = null;
    var _GAME_DISPLAY_WIDTH = 100;
    var _GAME_DISPLAY_HEIGHT = 40;
    var _HUD_DISPLAY_WIDTH = 20;
    var _HUD_DISPLAY_HEIGHT = 40;

    var Screens = {};
    var Maps = {};
    var World = {};

    function init() {
         console.log("Lootr Init Ran");

        _gameDisplay = new ROT.Display({width: _GAME_DISPLAY_WIDTH, height: _GAME_DISPLAY_HEIGHT, fontSize: 18});
        _hudDisplay = new ROT.Display({width: _HUD_DISPLAY_WIDTH, height: _HUD_DISPLAY_HEIGHT, fontSize: 18});
    }

    function getGameDisplayWidth() {
        return _GAME_DISPLAY_WIDTH;
    }

    function getGameDisplayHeight() {
        return _GAME_DISPLAY_HEIGHT;
    }

    function getHudDisplay() {
        return _hudDisplay;
    }

    function getHudDisplayContainer() {
        return _hudDisplay.getContainer();
    }

    function getGameDisplay() {
        return _gameDisplay;
    }

    function getGameDisplayContainer() {
        return _gameDisplay.getContainer();
    }

    function getCurrentScreen() {
        return _currentScreen;
    }

    function switchScreen( screen ) {
        // If we had a screen before, call the Exit method before switching
        if ( _currentScreen !== null ) {
            _currentScreen.exit();
        }

        // Clear both displays
        getGameDisplay().clear();
        getHudDisplay().clear();

        // Update our current screen, call Enter
        _currentScreen = screen;
        _currentScreen.enter();

        // Render our game and hud
        _currentScreen.renderGame(getGameDisplay());
        _currentScreen.renderHud(getHudDisplay());
    }

    function refreshScreens() {
        // Clear both displays
        getGameDisplay().clear();
        getHudDisplay().clear();

        // Render our game and hud
        _currentScreen.renderGame(getGameDisplay());
        _currentScreen.renderHud(getHudDisplay());
    }


    return {
        init: init,
        Screens: Screens,
        Maps: Maps,
        World: World,

        getGameDisplayWidth: getGameDisplayWidth,
        getGameDisplayHeight: getGameDisplayHeight,
        switchScreen: switchScreen,
        getCurrentScreen: getCurrentScreen,
        getHudDisplay: getHudDisplay,
        getHudDisplayContainer: getHudDisplayContainer,
        getGameDisplay: getGameDisplay,
        getGameDisplayContainer: getGameDisplayContainer,

        refreshScreens: refreshScreens
    }

})( window );
