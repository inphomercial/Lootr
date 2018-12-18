'use strict';

class Tile extends DynamicGlyph {
	constructor(args) {
		super(args);

		// Set the default properties
		// this._isExplored = false;
		// this._isSolid = false;

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

    // Tile extends DynamicGlyph getting all its attributes
    // Lootr.DynamicGlyph.call(this, args);

    // Set the default properties
    // this._isExplored = false;
	// this._isSolid = false;

    // Replace our defaults with template values
    // Object.assign(this, args);
}

// Lootr.Tile = Tile;

// console.log('Lootr', Lootr);
// console.log('LootrTile', Lootr.Tile);
// Lootr.Tile.extend(Lootr.DynamicGlyph);

// Lootr.Tile.prototype.getIsExplored = function() {
//     return this._isExplored;
// }

// Lootr.Tile.prototype.isSolid = function() {
//     return this._isSolid;
// }

// Lootr.Tile = function ( args ) {

//     // Tile extends DynamicGlyph getting all its attributes
//     Lootr.DynamicGlyph.call(this, args);

//     // Set the default properties
//     this._isExplored = false;
// 	this._isSolid = false;

//     // Replace our defaults with template values
//     Object.assign(this, args);
// }
// Lootr.Tile.extend(Lootr.DynamicGlyph);

// Lootr.Tile.prototype.getIsExplored = function() {
//     return this._isExplored;
// }

// Lootr.Tile.prototype.isSolid = function() {
//     return this._isSolid;
// }
