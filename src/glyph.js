

class Glyph {

	constructor(template) {
		// Set our Defaults
		this._char = template.char || "?";
		this._foreground = template.foreground || 'yellow';
		this._originalForeground = this._foreground;
		this._background = template.background || 'black';
	}


	getChar() {
		return this._char;
	}

	getForeground() {
		return this._foreground;
	}

	getOriginalForeground() {
		return this._originalForeground;
	}

	getBackground() {
		return this._background;
	}

	setForeground(color) {
		this._foreground = color;
	}

	setBackground( color ) {
		this._background = color;
	}
};