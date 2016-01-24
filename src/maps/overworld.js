'use strict';

Lootr.Maps.Overworld = function ( args ) {

    this._width = 100;
    this._height = 100;

    var map = this.generateWorld();

    // // Overoworld extends Map getting all its attributes
    // Passing in the generated tiles
    Lootr.Map.call(this, map);

    // Add entities to map
    //
    // Add items to map
    var woodenSword = new Lootr.Item(Lootr.Items.WoodenSword);
    this.addItemAt(7, 7, woodenSword);

    //
    // Add player to map
    var player = new Lootr.Player({name: "inpho", char: "@", foreground: "red"});
    this.addEntityAt(10, 10, player);
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
