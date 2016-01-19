'use strict';

Lootr.Map = function ( tiles ) {

    this._tiles = tiles;

    this._items = [];
    this._entities = [];
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

// Create the empty map
Lootr.Map.prototype.createEmptyMap = function() {
    var blankMap = new Array(this._width);
    for (var w = 0; w < this._width; w++) {
        blankMap[w] = new Array(this._height);
    }

    return blankMap;
};
