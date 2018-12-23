'use strict';

class Tile extends DynamicGlyph {
	constructor(args) {
		super(args);

		// Set the default properties
		this._isExplored = false;
		this._isSolid = false;

		// Replace our defaults with template values
		Object.assign(this, args);
	}

	getIsExplored() {
		console.log('this', this);
		return this._isExplored;
	}

	isSolid() {
		return this._isSolid;
	}
}