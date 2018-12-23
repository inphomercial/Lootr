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

	addObjComponent(component) {
		if (this.hasComponent(component.name)) {
			console.warn("Cannot add this component, already exists on object");
			return;
		}

		let components = this.getComponents();

		components[component.name] = component;
	}

	// Convert entities and tiles to use the addObjComponent
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
		console.log('components', components);
	
		return components[componentName] !== undefined;
	}
	
	removeComponent(componentName) {
		let components = this.getComponents();
	
		delete components[componentName];
	}
}