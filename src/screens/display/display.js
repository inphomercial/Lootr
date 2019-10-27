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
		DebugLogger("Display setup");
	}

	enter() {
		DebugLogger("Display enter");
	}

	renderGame() {
		DebugLogger("Display renderGame");
	}

	exit() {
		DebugLogger("Display exit");
	}

	handleInput(inputType, inputDate) {
		DebugLogger("Handling Input");
	}
}
