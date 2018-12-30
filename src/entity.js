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
		if (!this.isAlive()) {
			return;
		}

		EnemyMovementSystem(this);
	}
}