'use strict';

class Entity extends DynamicGlyph {

	constructor(template) {
		super(template);

		// Set Defaults
		this._name = template.name || 'unnamed' ;
		this._isAlive = true;
		this._speed = template.speed;
		this._turns = 0;
		this._map = null;
		
		for (const key of Object.keys(template.componentList)) {
			const component = Lootr.EntityComponents[key](template.componentList[key]);

			this.addObjComponent(component);
		}
	}

	getTurns() {
		return this._turns;
	}

	getName() {
		return this._name;
	}

	generateUUID() {
		return this._uid;
	}

	getSpeed() {
		return this._speed;
	}

	getMap() {
		return this._map;
	}

	isAlive() {
		return this._isAlive;
	}

	setMap( map ){
		this._map = map;
	}

	act() {
		console.log("%o is acting", this);
		// let components = this.getComponents();
		
		// for(var i = 0; i < components.length; i++) {
		// 	if (components[i].act) {
		// 		components[i].act();
		// 	}
		// }

		// Wait for input
		// this.getMap().getEngine().lock();
	}

    // Entity extends DynamicGlyph setting all its attributes
	// Lootr.DynamicGlyph.call(this, args);
	
	// console.log('args', args);


	// Clean up (Removing old template data)
}
// Lootr.Entity.extend(Lootr.DynamicGlyph);

// Lootr.Entity.prototype.getTurns = function() {
//     return this._turns;
// }

// Lootr.Entity.prototype.getName = function() {
//     return this._name;
// }

// Lootr.Entity.prototype.generateUUID = function() {
//     return this._uid;
// }

// Lootr.Entity.prototype.getSpeed = function() {
//     return this._speed;
// }

// Lootr.Entity.prototype.getMap = function() {
//     return this._map;
// }

// Lootr.Entity.prototype.isAlive = function() {
//     return this._isAlive;
// }

// Lootr.Entity.prototype.setMap = function( map ){
//     this._map = map;
// }

// Lootr.Entity.prototype.act = function() {
// 	console.log("%o is acting", this);
// 	// let components = this.getComponents();
	
// 	// for(var i = 0; i < components.length; i++) {
// 	// 	if (components[i].act) {
// 	// 		components[i].act();
// 	// 	}
// 	// }

//     // Wait for input
//     // this.getMap().getEngine().lock();
// }
