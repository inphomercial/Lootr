'use strict';

Lootr.DynamicGlyph = function ( args ) {

    // DynamicGlyph extends Glyph setting all its attributes
    Lootr.Glyph.call(this, args);

    // Set our Defaults
    this._x = args.x;
    this._y = args.y;
    this._components = [];
    this._uid = Lootr.Utilities.generateUUID();

    // Replace our defaults with template values
	Object.assign(this, args);
	
	// Init our components
	this.initilizeComponents();
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

Lootr.DynamicGlyph.prototype.setX = function(x) {
    return this._x = x;
}

Lootr.DynamicGlyph.prototype.setY = function(y) {
    return this._y = y;
}

Lootr.DynamicGlyph.prototype.getComponents = function() {
    return this._components;
}

Lootr.DynamicGlyph.prototype.addComponent = function(component) {
	if (this.hasComponent(component.name)) {
		console.warn("Cannot add this component, already exists on object");
		return;
	}

	this.getComponents().push(component);
	component.init.call(this);
}

Lootr.DynamicGlyph.prototype.hasComponent = function(componentName) {
	let components = this.getComponents();

	return components.filter(function(component) {
		return component.name === componentName;
	}).length > 0;
}

Lootr.DynamicGlyph.prototype.removeComponent = function(componentName) {
	let components = this.getComponents();

	for(var i = 0; i < components.length; i++) {
		if (components[i].name === componentName) {
			delete components[i];
		}
	}
}

Lootr.DynamicGlyph.prototype.initilizeComponents = function() {
	let components = this.getComponents();
	for(var i = 0; i < components.length; i++) {

		if (components[i].init) {
			components[i].init();
		}
	}
}
