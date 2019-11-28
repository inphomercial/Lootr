'use strict';

var Lootr = ( function( window ) {
	var _gameDisplay = null;
	var _currentScreen = null;
	var _GAME_DISPLAY_WIDTH = 50;
	var _GAME_DISPLAY_HEIGHT = 18;
	var _GAME_DISPLAY_FONT_SIZE = 32;

	var Screens = {};
	var Maps = {};
	var World = {};
	var _player = {};
	
	var _IS_DEBUG = true;

	function init() {

		var displayOptions = {
			width: _GAME_DISPLAY_WIDTH, 
			height: _GAME_DISPLAY_HEIGHT,
			fontSize: _GAME_DISPLAY_FONT_SIZE
		}

		_gameDisplay = new ROT.Display(displayOptions);

		const bindEventToScreen = (event) => {
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

	function toggleDebug() {
		_IS_DEBUG = !_IS_DEBUG;
	}

	function isDebug() {
		return _IS_DEBUG;
	}

	function getGameDisplayWidth() {
		return _GAME_DISPLAY_WIDTH;
	}

	function getGameDisplayHeight() {
		return _GAME_DISPLAY_HEIGHT;
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

		// Update our current screen, call Enter
		_currentScreen = screen;
		_currentScreen.enter(getGameDisplay());

		// Render our game
		_currentScreen.renderGame();
	}
	
	function switchSubScreen(screen, args) {
		// Clear both displays
		getGameDisplay().clear();

		// Update our current screen, call Enter with args that can be passed in
		_currentScreen = screen;
		_currentScreen.enter(getGameDisplay(), args);

		// Render our game
		_currentScreen.renderGame();
	}

	function refreshScreens() {
		// Clear both displays
		getGameDisplay().clear();

		// Render our game and
		_currentScreen.renderGame();
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
		switchSubScreen: switchSubScreen,
		getCurrentScreen: getCurrentScreen,
		getGameDisplay: getGameDisplay,
		getGameDisplayContainer: getGameDisplayContainer,

		refreshScreens: refreshScreens,

		toggleDebug,
		isDebug,

		getTile: getTile
	}

})( window );

Lootr.Templates = {};
Lootr.Templates.Items = {};
Lootr.Templates.Entities = {};
Lootr.Templates.Tiles = {};
Lootr.Templates.Spells = {};
