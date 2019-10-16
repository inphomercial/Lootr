// 'use strict';

class Map {
	constructor(tiles) {
		this._tiles = tiles;

		this._items = {};
		this._entities = {};

		// Create the Scheduler and Engine
		this._scheduler = new ROT.Scheduler.Speed();
		this._engine = new ROT.Engine(this._scheduler);
	}

	getItems() {
		return this._items;
	}
	
	getEntities() {
		return this._entities;
	}

	removeEntity(entity) {
		// If the entity is an Actor, remove from scheduler
		if(entity.hasComponent('Actor')) {
			this._scheduler.remove(entity);
		}

		delete this._entities[entity.getUid()];
	}

	removeItem(item) {
		delete this._items[item.getUid()];
	}
	
	getWidth() {
		return this._width;
	}
	
	getHeight() {
		return this._height;
	}
	
	getTile( x, y ) {
		return this._tiles[x][y];
	}

	getUnexploredPassableTiles() {
		return _.reduce(this._tiles, (accum, tileGroup) => {
			accum.push(..._.filter(tileGroup, (tile) => {
				return !tile.getIsExplored() && !tile.isSolid() && tile.isReachable();
			}));
			return accum;
		}, []);
	}

	getUnexploredTiles(limit = false, x, y) {
		return _.reduce(this._tiles, (accum, tileGroup) => {
			accum.push(..._.filter(tileGroup, (tile) => {
				if (!tile.getIsExplored() && tile.isReachable()) {
					if (limit) {
						return Math.abs(x - tile.getX()) + Math.abs(y - tile.getY()) < limit;
					}
					return true;
				}
			}));
			return accum;
		}, []);
	}

	getRandomUnexploredPassableTile() {
		const unexploredTiles = this.getUnexploredPassableTiles();

		return unexploredTiles[_.random(unexploredTiles.length-1)];
	}

	getNearestUnexploredTile(x, y) {
		const unexploredTiles = this.getUnexploredTiles();

		if (unexploredTiles.length < 1) {
			return false;
		}

		return _.min(unexploredTiles, (tile) => {
			return Math.abs(x - tile.getX()) + Math.abs(y - tile.getY());
		});
	}
	
	getMap() {
		return this._tiles;
	}

	computeUnreachableTiles(x, y) {
		let xTile;
		let yTile;
		for (xTile in this._tiles) {
			for (yTile in this._tiles[xTile]) {
				if (this._tiles[xTile][yTile].isSolid()) {
					if (!this.adjacentToUnsolidTile(xTile, yTile))
						this._tiles[xTile][yTile].setUnreachable();
				}
			}
		}
	}

	adjacentToUnsolidTile (x, y) {
		for (let xDiff of _.range(-1, 2)) {
			for (let yDiff of _.range(-1, 2)) {
				if (xDiff !== 0 || yDiff !== 0) {
					let newX = parseInt(x) + xDiff;
					let newY = parseInt(y) + yDiff;
					if (newX < 0 || newY < 0) {
						continue;
					} else if (newX >= this.getWidth() || newY >= this.getHeight()) {
						continue;
					}
					if (!this._tiles[String(newX)][String(newY)].isSolid()) {
						return true;
					}
				}
			}
		}
		return false;
	}
	
	isTileSolid(x, y) {
		try {
			return this.getTile(x, y).isSolid();
		} catch (e) {
			return true;
		}
	}

	isTileOpaque(x, y) {
		try {
			return this.getTile(x, y).isOpaque();
		} catch (e) {
			return true;
		}
	}

	isTileOccupied(x, y) {
		let entity = this.getEntityAt(x, y);

		return entity !== undefined && entity.isAlive();
	}

	getEntityAt(x, y) {
		return _.find(this.getEntities(), (entity) => {
			return entity.getX() == x && entity.getY() == y;
		});
	}

	// Will find all the items for a given x, y and then return back the top-most one
	getTopMostItemAt(x, y) {
		let items = this.getItems();
		let foundItems = [];

		for (let prop in items) {
			if (items[prop].getX() == x && items[prop].getY() == y) {
				foundItems.push(items[prop]);
			}
		}

		return foundItems.slice(-1).pop()
	}
	
	getEngine() {
		return this._engine;
	}
	
	setTileColor( x, y, color ) {
		var tile = this.getTile(x, y);
	
		tile.foreground = color;
	}
	
	addEntityAt( x, y, entity ) {
	
		// Add map to entity
		entity.setMap(this);
	
		// check if tile is empty
	
		// Check if x and y are in bounds
	
		// Set entities position
		entity.setX(x);
		entity.setY(y);

		// Add entity to the map
		this._entities[entity.getUid()] = entity;
	
		// Add our entity to the map scheduler
		if (entity.hasComponent('Actor')) {
			this._scheduler.add(entity, true);
		}
	}
	
	addItemAt( x, y, item ) {
		item.setX(x);
		item.setY(y);
	
		// Add Item to the map
		this._items[item.getUid()] = item;
	}
	
	isExplored( x, y ) {
		return this._tiles[x][y].getIsExplored();
	}

	getStartingCoordinates(x, y) {
		let startingX = x - Math.round(Lootr.getGameDisplayWidth()/2) + 1;
		const maxStartingX = this.getWidth() - Lootr.getGameDisplayWidth();
		if (startingX <= 0) {
			startingX = 0;
		} else if (startingX >= maxStartingX) {
			startingX = maxStartingX;
		}

		let startingY = y - Math.round(Lootr.getGameDisplayHeight()/2) + 1;
		const maxStartingY = this.getHeight() - Lootr.getGameDisplayHeight();
		if (startingY <= 0) {
			startingY = 0;
		} else if (startingY >= maxStartingY) {
			startingY = maxStartingY;
		}

		return [startingX,startingY];
	}
	
	renderMap( display, centerCoordinates, overrideColor = false ) {
		const startingCoords = this.getStartingCoordinates(...centerCoordinates);
		for ( var x = 0; x < Lootr.getGameDisplayWidth(); x++ ) {
			for ( var y = 0; y < Lootr.getGameDisplayHeight(); y++ ) {
				var tile = this.getTile(x + startingCoords[0], y + startingCoords[1]);
				if (tile.getIsExplored()) {
					display.draw(x, y, tile.getChar(), overrideColor || tile.getForeground(), tile.getBackground());
				}
			}
		}
		return;
	}
	
	renderEntities( display, centerCoordinates ) {
		var entities = this.getEntities();
		const startingCoords = this.getStartingCoordinates(...centerCoordinates);
	
		_.each(entities, function ( entity ) {
			let x = entity.getX();
			let y = entity.getY();
			const lastCoords = entity.getLastKnownCoords();
			if( x < startingCoords[0] + Lootr.getGameDisplayWidth() && y <  startingCoords[1] + Lootr.getGameDisplayHeight()) {
				if(Lootr.getPlayer().canSeeTile(x, y)) {
					entity.setLastKnownCoords(x, y);
					entity.setLastKnownPlayerCoords(...Lootr.getPlayer().getCoordinates());
					display.draw(x - startingCoords[0], y - startingCoords[1], entity.getChar(), entity.getForeground(), entity.getBackground());
				} else if (lastCoords.length === 2 && !Lootr.getPlayer().canSeeTile(...lastCoords)) {
					display.draw(lastCoords[0] - startingCoords[0], lastCoords[1] - startingCoords[1], entity.getChar(), entity.getForeground(), entity.getBackground());
				}
			}
		});
	}
	
	renderItems( display, centerCoordinates ) {
		var items = this.getItems();
		const startingCoords = this.getStartingCoordinates(...centerCoordinates);
	
		_.each(items, function ( item ) {
			let x = item.getX();
			let y = item.getY();
			if( x < startingCoords[0] + Lootr.getGameDisplayWidth() && y <  startingCoords[1] + Lootr.getGameDisplayHeight()) {
				if(this.getTile(x, y).getIsExplored()) {
					display.draw(x-startingCoords[0], y-startingCoords[1], item.getChar(), item.getForeground(), item.getBackground());
				}
			}
		}.bind(this));
	}
	
	// Create the empty map
	createEmptyMap() {
		var blankMap = new Array(this._width);
		for (var w = 0; w < this._width; w++) {
			blankMap[w] = new Array(this._height);
		}
	
		return blankMap;
	};
};

