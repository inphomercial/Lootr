'use strict';

Lootr.DynamicGlyph = function ( args ) {

    // DynamicGlyph extends Glyph getting all its attributes
    Lootr.Glyph.call(this, args);

    this._name = args.name || 'blah';
    this._x = args.x;
    this._y = args.y;
    this._components = args.components || null;
}

// Make dynamic inherit all methods from glyphs
Lootr.DynamicGlyph.extend(Lootr.Glyph);

Lootr.DynamicGlyph.prototype.getName = function() {
    return this._name;
}

Lootr.DynamicGlyph.prototype.getX = function() {
    return this._x;
}

Lootr.DynamicGlyph.prototype.getY = function() {
    return this._y;
}

Lootr.DynamicGlyph.prototype.setX = function( x ) {
    return this._x = x;
}

Lootr.DynamicGlyph.prototype.setY = function( y ) {
    return this._y = y;
}

Lootr.DynamicGlyph.prototype.getComponents = function() {
    return this._components;
}
