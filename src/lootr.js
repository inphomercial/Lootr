'use strict';

var Lootr = ( function( window ) {
    var _gameDisplay = null;
    var _hudDisplay = null;
    var _logDisplay = null;
    var _currentScreen = null;
    var _GAME_DISPLAY_WIDTH = 100;
    var _GAME_DISPLAY_HEIGHT = 30;
    var _HUD_DISPLAY_WIDTH = 20;
    var _HUD_DISPLAY_HEIGHT = 40;
    var _LOG_DISPLAY_HEIGHT = 10;
    var _LOG_DISPLAY_WIDTH = 100;

    var Screens = {};
    var Maps = {};
    var World = {};
	var _player = {};

    function init() {
         console.log("Lootr Init Ran");

        _gameDisplay = new ROT.Display({width: _GAME_DISPLAY_WIDTH, height: _GAME_DISPLAY_HEIGHT, fontSize: 18});
        _hudDisplay = new ROT.Display({width: _HUD_DISPLAY_WIDTH, height: _HUD_DISPLAY_HEIGHT, fontSize: 18});
        _logDisplay = new ROT.Display({width: _LOG_DISPLAY_WIDTH, height: _LOG_DISPLAY_HEIGHT, fontSize: 14});

        var bindEventToScreen = function(event) {
			window.addEventListener(event, function(e) {
				// When an event is received, send it to the
				// screen if there is one
				if (_currentScreen !== null) {
					// Send the event type and data to the screen
					_currentScreen.handleInput(event, e);
				}
			});
		}

		// Bind keyboard input events
		bindEventToScreen('keydown');
    }

    function getGameDisplayWidth() {
        return _GAME_DISPLAY_WIDTH;
    }

    function getGameDisplayHeight() {
        return _GAME_DISPLAY_HEIGHT;
    }

    function getHudDisplayWidth() {
        return _HUD_DISPLAY_WIDTH;
    }

    function getHudDisplayHeight() {
        return _HUD_DISPLAY_HEIGHT;
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

    function getLogDisplay() {
        return _logDisplay;
    }

    function getLogDisplayContainer() {
        return _LogDisplay.getContainer();
    }

    function getGameDisplayContainer() {
        return _gameDisplay.getContainer();
    }

    function getCurrentScreen() {
        return _currentScreen;
    }

    function setPlayer( player ) {
        _player = player;
    }

    function getPlayer() {
        return _player;
    }

    function switchScreen( screen ) {
        // If we had a screen before, call the Exit method before switching
        if ( _currentScreen !== null ) {
            _currentScreen.exit();
        }

        // Clear both displays
        getGameDisplay().clear();
        getLogDisplay().clear();
        getHudDisplay().clear();

        // Update our current screen, call Enter
        _currentScreen = screen;
        _currentScreen.enter(getGameDisplay(), getHudDisplay(), getLogDisplay());

        // Render our game and hud
        _currentScreen.renderGame();
        _currentScreen.renderLog();
        _currentScreen.renderHud();
    }

    function refreshScreens() {
        // Clear both displays
        getGameDisplay().clear();
        getHudDisplay().clear();

        // Render our game and hud
        _currentScreen.renderGame();
        _currentScreen.renderLog();
        _currentScreen.renderHud();
    }

	function getTile(x, y) {
		return _currentScreen._map.getTile(x, y);
	}

    return {
        init: init,
        Screens: Screens,
        Maps: Maps,
        World: World,

        setPlayer: setPlayer,
        getPlayer: getPlayer,

        getGameDisplayWidth: getGameDisplayWidth,
        getGameDisplayHeight: getGameDisplayHeight,
        switchScreen: switchScreen,
        getCurrentScreen: getCurrentScreen,
        getHudDisplay: getHudDisplay,
        getHudDisplayContainer: getHudDisplayContainer,
        getGameDisplay: getGameDisplay,
        getGameDisplayContainer: getGameDisplayContainer,

        refreshScreens: refreshScreens,

        getTile: getTile
    }

})( window );
