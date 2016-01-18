
Lootr.Glyph = function ( args ) {

    this._char = args.char || " ";
    this._foreground = args.foreground || 'white';
    this._originalForeground = this._foreground;
    this._background = args.background || 'black';
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
