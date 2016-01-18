
Lootr.Entity = function ( args ) {

    // Entity extends DynamicGlyph getting all its attributes
    // DynamicGlyph extends Glyph
    Lootr.DynamicGlyph.call(this, args);

    this._isAlive = true;
    this._turns = 0;

}

// Make Entity inherit all methods from DynamicGlyph
Lootr.Entity.extend(Lootr.DynamicGlyph);


Lootr.Entity.prototype.isAlive = function() {
    return this._isAlive;
}

Lootr.Entity.prototype.getTurns = function() {
    return this._turns;
}
