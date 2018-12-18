'use strict';

class Display {
	constructor(template) {
		this._caption = "no caption";
		this.enter = null;
		this.renderGame = null;
		this.exit = null;
		this.handleInput = null;
		this.map = null;

		// Replace our defaults with template values
		Object.assign(this, template);
	}

	setup() {
		console.log("Display setup");
	}

	enter() {
		console.log("Display enter");
	}

	renderGame() {
		console.log("Display renderGame");
	}

	exit() {
		console.log("Display exit");
	}

	handleInput(inputType, inputDate) {
		console.log("Handling Input");
	}
}
