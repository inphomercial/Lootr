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
