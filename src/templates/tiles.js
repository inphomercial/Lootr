'use strict';

Lootr.Tiles = {};

Lootr.Tiles.WallTile = function () {
    this.char = "#";
    this.foreground = "orange";

    Lootr.Tile.call(this, this);
}
Lootr.Tiles.WallTile.extend(Lootr.Tile);

Lootr.Tiles.GemTile = function () {
    this.char = "#";
    this.foreground = "blue";

    Lootr.Tile.call(this, this);
}
Lootr.Tiles.GemTile.extend(Lootr.Tile);
