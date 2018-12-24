'use strict';

class Tile extends DynamicGlyph {
	constructor(template) {
		super(template);

		// Set the default properties
		this._isExplored = false;
		this._isSolid = false;

		// Replace our defaults with template values
		Object.assign(this, template);
	}

	getIsExplored() {
		return this._isExplored;
	}

	isSolid() {
		return this._isSolid;
	}
}