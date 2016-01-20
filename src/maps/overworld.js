'use strict';

Lootr.Maps.Overworld = function ( args ) {

    this._width = 100;
    this._height = 100;

    var map = this.generateWorld();



    // Add entities to map
    //
    // Add items to map
    //
    // Add player to map
    //
    // // Overoworld extends Map getting all its attributes
    // Passing in the generated tiles
    Lootr.Map.call(this, map);

}
Lootr.Maps.Overworld.extend(Lootr.Map);

Lootr.Maps.Overworld.prototype.generateWorld = function () {

    var temp_map = this.createEmptyMap();

    // Setup generator
    var generator = new ROT.Map.Cellular(this._width, this._height);
    generator.randomize(.7);

    // Update our map
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            temp_map[x][y] = new Lootr.Tiles.WallTile();
        } else {
            temp_map[x][y] = new Lootr.Tiles.GemTile();
        }
    });

    return temp_map;
}
