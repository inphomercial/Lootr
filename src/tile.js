'use strict';

class Tile extends DynamicGlyph {
	constructor(template, x, y) {
		super(template);

		// Set the default properties
		this._isExplored = false;
		this._isSolid = false;
		this._isOpaque = false;
		this._x = x;
		this._y = y;
		this._reachable = true;

		// Replace our defaults with template values
		Object.assign(this, template);
	}

	getIsExplored() {
		return this._isExplored;
	}

	setExplored() {
		this._isExplored = true;
	}

	isReachable() {
		return this._reachable;
	}

	setUnreachable() {
		this._reachable = false;
	}

	isSolid() {
		return this._isSolid;
	}

	isOpaque() {
		return this._isOpaque;
	}
}