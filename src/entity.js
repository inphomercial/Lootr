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
		this._previousCoords = [];
		this._lastKnownPlayerCoords = [];
		this._lastKnownCoords = [];
		
		for (const key of Object.keys(template.componentList)) {
			const component = Lootr.EntityComponents[key](template.componentList[key]);

			this.addObjComponent(component);
		}
	}

	getPreviousCoords() {
		return this._previousCoords;
	}

	getLastKnownPlayerCoords() {
		return this._lastKnownPlayerCoords;
	}

	getLastKnownCoords() {
		return this._lastKnownCoords;
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

	setMap(map){
		this._map = map;
	}

	setPreviousCoords(x, y) {
		this._previousCoords = [x, y];
	}

	setLastKnownPlayerCoords(x, y) {
		this._lastKnownPlayerCoords = [x, y];
	}

	setLastKnownCoords(x, y) {
		this._lastKnownCoords = [x, y];
	}

	forgetLastKnownPlayerCoords() {
		this._lastKnownPlayerCoords = [];
	}

	act() {
		if (!this.isAlive()) {
			return;
		}

		if (this.hasComponent('Actor') && this.hasComponent('Enemy')) {
			EnemyMovementSystem(this);
			SpawnSystem(this);
		}
	}
}