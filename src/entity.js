'use strict';

Lootr.Entity = function ( args ) {

    // Entity extends DynamicGlyph setting all its attributes
    Lootr.DynamicGlyph.call(this, args);

	// Set Defaults
    this._name = 'unnamed';
    this._isAlive = true;
    this._speed = 10;
    this._turns = 0;
    this._map = null;

    // Replace our defaults with template values
    Object.assign(this, args);
}
Lootr.Entity.extend(Lootr.DynamicGlyph);

Lootr.Entity.prototype.getTurns = function() {
    return this._turns;
}

Lootr.Entity.prototype.getName = function() {
    return this._name;
}

Lootr.Entity.prototype.generateUUID = function() {
    return this._uid;
}

Lootr.Entity.prototype.getSpeed = function() {
    return this._speed;
}

Lootr.Entity.prototype.getMap = function() {
    return this._map;
}

Lootr.Entity.prototype.isAlive = function() {
    return this._isAlive;
}

Lootr.Entity.prototype.setMap = function( map ){
    this._map = map;
}

Lootr.Entity.prototype.act = function() {
    console.log("acting");

    // Wait for input
    this.getMap().getEngine().lock();
}
