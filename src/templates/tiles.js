'use strict';

Lootr.Tiles = {};

Lootr.Tiles.WallTile = function () {
    this.char = "#";
    this.foreground = "orange";

    Lootr.Tile.call(this, this);
}
Lootr.Tiles.WallTile.extend(Lootr.Tile);

Lootr.Tiles.WaterDeepTile = function () {
    this.char = "#";
    this.foreground = "blue";

    Lootr.Tile.call(this, this);
}
Lootr.Tiles.WaterDeepTile.extend(Lootr.Tile);

Lootr.Tiles.WaterShallowTile = function () {
    this.char = "#";
    this.foreground = "lightblue";

    Lootr.Tile.call(this, this);
}
Lootr.Tiles.WaterShallowTile.extend(Lootr.Tile);
