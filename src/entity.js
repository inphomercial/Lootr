'use strict';

Lootr.Entity = function ( args ) {

    // Entity extends DynamicGlyph getting all its attributes
    // DynamicGlyph extends Glyph
    Lootr.DynamicGlyph.call(this, args);

    // Set via args
    this._isAlive = true;
    this._speed = args.speed || 10;

    // Initial entity state
    this._turns = 0;
    this._map = null;
    this._uid = Lootr.Utilities.getUID();
}

// Make Entity inherit all methods from DynamicGlyph
Lootr.Entity.extend(Lootr.DynamicGlyph);

Lootr.Entity.prototype.getTurns = function() {
    return this._turns;
}

Lootr.Entity.prototype.getUid = function() {
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
