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
	
	getMap() {
		return this._tiles;
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

	getItemAt(x, y) {
		return _.find(this.getItems(), (item) => {
			return item.getX() == x && item.getY() == y;
		});
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
	
	renderMap( display, centerCoordinates ) {
		const startingCoords = this.getStartingCoordinates(...centerCoordinates);
		for ( var x = 0; x < Lootr.getGameDisplayWidth(); x++ ) {
			for ( var y = 0; y < Lootr.getGameDisplayHeight(); y++ ) {
				var tile = this.getTile(x + startingCoords[0], y + startingCoords[1]);
				if (tile.getIsExplored()) {
					display.draw(x, y, tile.getChar(), tile.getForeground(), tile.getBackground());
				}
			}
		}
		return;
		
		var screenWidth = Lootr.getGameDisplayWidth();
		var screenHeight = Lootr.getGameDisplayHeight();
		var player = Lootr.getPlayer();
	
		// Make sure the x-axis doesn't go to the left of the left bound
		var topLeftX = Math.max(0, player.getX() - (screenWidth / 2));
		// Make sure we still have enough space to fit an entire game screen
		topLeftX = Math.min(topLeftX, this.getWidth() - screenWidth);
		// Make sure the y-axis doesn't above the top bound
		var topLeftY = Math.max(0, player.getY() - (screenHeight / 2));
		// Make sure we still have enough space to fit an entire game screen
		topLeftY = Math.min(topLeftY, this.getHeight() - screenHeight);
		// Iterate through all visible map cells
		for (var x = topLeftX; x < topLeftX + screenWidth; x++) {
			for (var y = topLeftY; y < topLeftY + screenHeight; y++) {
				// Fetch the glyph for the tile and render it to the screen
				// at the offset position.
				// var glyph = this._map.getTile(x, y).getGlyph();
				var tile = this.getTile(x, y);
				display.draw(x - topLeftX, y - topLeftY, tile.getChar(), tile.getForeground(), tile.getBackground());
				// display.draw(
				// 	x - topLeftX,
				// 	y - topLeftY,
				// 	glyph.getChar(), 
				// 	glyph.getForeground(), 
				// 	glyph.getBackground());
			}
		}
		// Render the cursor
		display.draw(
			this._centerX - topLeftX, 
			this._centerY - topLeftY,
			'@',
			'white',
			'black');
	}
	
	renderEntities( display, centerCoordinates ) {
		var entities = this.getEntities();
		const startingCoords = this.getStartingCoordinates(...centerCoordinates);
	
		_.each(entities, function ( entity ) {
			let x = entity.getX();
			let y = entity.getY();
			if( x < startingCoords[0] + Lootr.getGameDisplayWidth() && y <  startingCoords[1] + Lootr.getGameDisplayHeight()) {
				if(Lootr.getPlayer().canSeeTile(x, y)) {
					display.draw(x-startingCoords[0], y-startingCoords[1], entity.getChar(), entity.getForeground(), entity.getBackground());
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

