'use strict';

Lootr.Map = function ( tiles ) {

    this._tiles = tiles;

    this._items = {};
    this._entities = {};

    // Create the Scheduler and Engine
    this._scheduler = new ROT.Scheduler.Speed();
    this._engine = new ROT.Engine(this._scheduler);
};

Lootr.Map.prototype.getItems = function() {
    return this._items;
}

Lootr.Map.prototype.getEntities = function() {
    return this._entities;
}

Lootr.Map.prototype.getWidth = function() {
    return this._width;
}

Lootr.Map.prototype.getHeight = function() {
    return this._height;
}

Lootr.Map.prototype.getTile = function( x, y ) {
    return this._tiles[x][y];
}

Lootr.Map.prototype.getMap = function() {
    return this._tiles;
}

Lootr.Map.prototype.getEngine = function() {
    return this._engine;
}

Lootr.Map.prototype.setTileColor = function( x, y, color ) {
    var tile = this.getTile(x, y);

    tile.foreground = color;
}

Lootr.Map.prototype.addEntityAt = function( x, y, entity ) {

    // Add map to entity
    entity.setMap(this);

    // check if tile is empty

    // Check if x and y are in bounds

    // Set entities position
    entity.setX(x);
    entity.setY(y);

    var key = x + ", " + y;

    // Add entity to the map
    this._entities[key] = entity;

    // Add our entity to the map scheduler
    this._scheduler.add(entity, true);
}

Lootr.Map.prototype.addItemAt = function( x, y, item ) {
    item.setX(x);
    item.setY(y);

    var key = x + ", " + y;

    // Add Item to the map
    this._items[key] = item;
}

Lootr.Map.prototype.isExplored = function( x, y ) {
    return this._tiles[x][y].getIsExplored();
}

Lootr.Map.prototype.renderMap = function( display ) {
    for ( var x = 1; x < Lootr.getGameDisplayWidth() - 1; x++ ) {
        for ( var y = 1; y < Lootr.getGameDisplayHeight() - 1; y++ ) {
            var tile = this.getTile(x, y);
            display.draw(x, y, tile.getChar(), tile.getForeground(), tile.getBackground());
        }
    }
}

Lootr.Map.prototype.renderEntities = function ( display ) {
    var entities = this.getEntities();

    _.each(entities, function ( entity ) {
        console.log(entity);
        display.draw(entity.getX(), entity.getY(), entity.getChar(), entity.getForeground(), entity.getBackground());
    });
}

Lootr.Map.prototype.renderItems = function ( display ) {
    var items = this.getItems();

    _.each(items, function ( item ) {
        console.log(item);
        display.draw(item.getX(), item.getY(), item.getChar(), item.getForeground(), item.getBackground());
    });
}

// Create the empty map
Lootr.Map.prototype.createEmptyMap = function() {
    var blankMap = new Array(this._width);
    for (var w = 0; w < this._width; w++) {
        blankMap[w] = new Array(this._height);
    }

    return blankMap;
};
