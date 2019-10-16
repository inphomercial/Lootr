

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
		if(Lootr.getPlayer().canSeeTile(this.getX(), this.getY())) {
			return this._foreground;
		} else {
			return 'grey';
		}
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

	setBackground(color) {
		this._background = color;
	}
};