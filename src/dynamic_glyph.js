'use strict';

class DynamicGlyph extends Glyph {
	constructor(template) {
		super(template);

		this._x = template.x;
		this._y = template.y;
		this._components = [];
		this._uid = Lootr.Utilities.generateUUID();
	}

	getName() {
		return this._name;
	}
	
	getX() {
		return this._x;
	}
	
	getY() {
		return this._y;
	}
	
	setX(x) {
		return this._x = x;
	}
	
	setY(y) {
		return this._y = y;
	}
	
	getComponents() {
		return this._components;
	}
	
	getComponent(componentName) {
		let components = this.getComponents();
	
		return components.filter(function(component) {
			return component.name === componentName;
		})[0];
	}
	
	addComponent(component) {
		if (this.hasComponent(component.name)) {
			console.warn("Cannot add this component, already exists on object");
			return;
		}
	
		let components = this.getComponents();
	
		components[component.name] = component;
	}
	
	hasComponent(componentName) {
		let components = this.getComponents();
	
		return components[componentName] !== undefined;
	}
	
	removeComponent(componentName) {
		let components = this.getComponents();
	
		delete components[componentName];
	}

    // DynamicGlyph extends Glyph setting all its attributes
    // Lootr.Glyph.call(this, template);

    // Set our Defaults
    // this._x = template.x;
    // this._y = template.y;
    // this._components = [];
    // this._uid = Lootr.Utilities.generateUUID();

    // // Replace our defaults with template values
	// Object.assign(this, template);
	
	// Init our components
	// this.initilizeComponents();
}
// Lootr.DynamicGlyph = function ( template ) {

//     // DynamicGlyph extends Glyph setting all its attributes
//     Lootr.Glyph.call(this, template);

//     // Set our Defaults
//     this._x = template.x;
//     this._y = template.y;
//     this._components = [];
//     this._uid = Lootr.Utilities.generateUUID();

//     // Replace our defaults with template values
// 	Object.assign(this, template);
	
// 	// Init our components
// 	// this.initilizeComponents();
// }

// Make dynamic inherit all methods from glyphs
// Lootr.DynamicGlyph.extend(Lootr.Glyph);

// Lootr.DynamicGlyph.prototype.getName = function() {
//     return this._name;
// }

// Lootr.DynamicGlyph.prototype.getX = function() {
//     return this._x;
// }

// Lootr.DynamicGlyph.prototype.getY = function() {
//     return this._y;
// }

// Lootr.DynamicGlyph.prototype.setX = function(x) {
//     return this._x = x;
// }

// Lootr.DynamicGlyph.prototype.setY = function(y) {
//     return this._y = y;
// }

// Lootr.DynamicGlyph.prototype.getComponents = function() {
//     return this._components;
// }

// Lootr.DynamicGlyph.prototype.getComponent = function(componentName) {
// 	let components = this.getComponents();

// 	return components.filter(function(component) {
// 		return component.name === componentName;
// 	})[0];
// }

// Lootr.DynamicGlyph.prototype.addComponent = function(component) {
// 	if (this.hasComponent(component.name)) {
// 		console.warn("Cannot add this component, already exists on object");
// 		return;
// 	}

// 	let components = this.getComponents();

// 	components[component.name] = component;
// 	// this.getComponents().push(component);
// 	// component.init.call(this);
// }

// Lootr.DynamicGlyph.prototype.hasComponent = function(componentName) {
// 	let components = this.getComponents();

// 	return components[componentName] !== undefined;

// 	// return components.filter(function(component) {
// 	// 	return component.name === componentName;
// 	// }).length > 0;
// }

// Lootr.DynamicGlyph.prototype.removeComponent = function(componentName) {
// 	let components = this.getComponents();

// 	delete components[componantName];

// 	// for(var i = 0; i < components.length; i++) {
// 	// 	if (components[i].name === componentName) {
// 	// 		delete components[i];
// 	// 	}
// 	// }
// }

// Lootr.DynamicGlyph.prototype.initilizeComponents = function() {
// 	let components = this.getComponents();
// 	for(var i = 0; i < components.length; i++) {

// 		if (components[i].init) {
// 			components[i].init();
// 		}
// 	}
// }
