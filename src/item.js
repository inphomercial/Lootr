'use strict';

Lootr.Item = function ( args ) {
    this._rarity = args.rarity || "common";

    // Tile extends DynamicGlyph getting all its attributes
    Lootr.DynamicGlyph.call(this, args);
}
Lootr.Item.extend(Lootr.DynamicGlyph);
