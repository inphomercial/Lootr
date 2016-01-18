
Lootr.DynamicGlyph = function ( args ) {

    // DynamicGlyph extends Glyph getting all its attributes
    Lootr.Glyph.call(this, args);

    this._name = args.name || 'blah';
    this._components = args.components || null;
}

// Make dynamic inherit all methods from glyphs
Lootr.DynamicGlyph.extend(Lootr.Glyph);

Lootr.DynamicGlyph.prototype.getName = function() {
    return this._name;
}

Lootr.DynamicGlyph.prototype.getComponents = function() {
    return this._components;
}
