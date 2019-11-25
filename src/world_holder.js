'use strict';

Lootr.WorldHolder = function ( args ) {
	this._maps = [];
};

Lootr.WorldHolder.prototype.addMap = function ( map ) {
	this._maps.push(map);
};

Lootr.WorldHolder.prototype.getMaps = function () {
	return this._maps;
};
