'use strict';

class Display {
	constructor(template) {
		this._caption = template._caption;
		this.enter = template.enter;
		this.renderGame = template.renderGame;
		this.exit = template.exit;
		this.handleInput = template.handleInput;
		this.map = template.map;

		// Replace our defaults with template values
		// Object.assign(this, template);
	}

	setup() {
		LoggerDebug("Display setup");
	}

	enter() {
		LoggerDebug("Display enter");
	}

	renderGame() {
		LoggerDebug("Display renderGame");
	}

	exit() {
		LoggerDebug("Display exit");
	}

	handleInput(inputType, inputDate) {
		LoggerDebug("Handling Input");
	}
}
