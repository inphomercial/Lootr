'use strict';

class Tile extends DynamicGlyph {
	constructor(template, x, y) {
		super(template);

		// Set the default properties
		this._x = x;
		this._y = y;
		this._reachable = true;
		this._isExplored = false;
		this._isSolid = template.isSolid || false;
		this._isOpaque = template.isOpaque || false;
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