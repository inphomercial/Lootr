'use strict';

class Item extends DynamicGlyph {
	constructor(args) {
		super(args);

		// Set Defaults
		this._rarity = "common";

		// Replace our defaults with template values
		Object.assign(this, args);
	}

    // Tile extends DynamicGlyph getting all its attributes
    // Lootr.DynamicGlyph.call(this, args);

}
// Lootr.Item.extend(Lootr.DynamicGlyph);
