'use strict';

Lootr.Item = function ( args ) {

    // Tile extends DynamicGlyph getting all its attributes
    Lootr.DynamicGlyph.call(this, args);

	// Set Defaults
    this._rarity = "common";

    // Replace our defaults with template values
    Object.assign(this, args);
}
Lootr.Item.extend(Lootr.DynamicGlyph);
