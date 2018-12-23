'use strict';

class Item extends DynamicGlyph {
	constructor(args) {
		super(args);

		// Set Defaults
		this._rarity = "common";

		// Replace our defaults with template values
		Object.assign(this, args);
	}
}
