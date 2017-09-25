
Lootr.Glyph = function ( args ) {

	// Set our Defaults
    this._char = " ";
    this._foreground = 'white';
    this._originalForeground = this._foreground;
    this._background = 'black';

    // Replace our defaults with template values
    Object.assign(this, args);
};

Lootr.Glyph.prototype.getChar = function() {
    return this._char;
}

Lootr.Glyph.prototype.getForeground = function() {
    return this._foreground;
}

Lootr.Glyph.prototype.getOriginalForeground = function() {
    return this._originalForeground;
}

Lootr.Glyph.prototype.getBackground = function() {
    return this._background;
}

Lootr.Glyph.prototype.setForeground = function ( color ) {
    this._foreground = color;
}

Lootr.Glyph.prototype.setBackground = function ( color ) {
    this._background = color;
}
