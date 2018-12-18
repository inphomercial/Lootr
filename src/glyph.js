

class Glyph {

	constructor(args) {
		// Set our Defaults
		this._char = args.char || "?";
		this._foreground = args.foreground || 'yellow';
		this._originalForeground = this._foreground;
		this._background = args.background || 'black';

		// Replace our defaults with template values
		Object.assign(this, args);
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



// Lootr.Glyph = function ( args ) {

// 	// Set our Defaults
//     this._char = args.char || "?";
//     this._foreground = args.foreground || 'yellow';
//     this._originalForeground = this._foreground;
//     this._background = args.background || 'black';

//     // Replace our defaults with template values
//     Object.assign(this, args);
// };

// Lootr.Glyph.prototype.getChar = function() {
//     return this._char;
// }

// Lootr.Glyph.prototype.getForeground = function() {
//     return this._foreground;
// }

// Lootr.Glyph.prototype.getOriginalForeground = function() {
//     return this._originalForeground;
// }

// Lootr.Glyph.prototype.getBackground = function() {
//     return this._background;
// }

// Lootr.Glyph.prototype.setForeground = function ( color ) {
//     this._foreground = color;
// }

// Lootr.Glyph.prototype.setBackground = function ( color ) {
//     this._background = color;
// }
