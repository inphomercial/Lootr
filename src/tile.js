'use strict';

Lootr.Tile = function ( args ) {
    this._isExplored = false;

    // Tile extends DynamicGlyph getting all its attributes
    Lootr.DynamicGlyph.call(this, args);
}
Lootr.Tile.extend(Lootr.DynamicGlyph);

Lootr.Tile.prototype.getIsExplored = function() {
    return this._isExplored;
}
