'use strict';
Lootr.Tile = function ( args ) {

    // Tile extends DynamicGlyph getting all its attributes
    Lootr.DynamicGlyph.call(this, args);

    // Set the default properties
    this._isExplored = false;
	this._isSolid = false;

    // Replace our defaults with template values
    Object.assign(this, args);
}
Lootr.Tile.extend(Lootr.DynamicGlyph);

Lootr.Tile.prototype.getIsExplored = function() {
    return this._isExplored;
}

Lootr.Tile.prototype.isSolid = function() {
    return this._isSolid;
}
