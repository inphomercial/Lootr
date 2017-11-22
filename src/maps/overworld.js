'use strict';

Lootr.Maps.Overworld = function ( args ) {

    this._width = 500;
    this._height = 500;

    var map = this.generateWorld();

    // Overworld extends Map getting all its attributes
    // Passing in the generated tiles
    Lootr.Map.call(this, map);

	// Add entities to map
	var goblin = new Lootr.Entity(Lootr.Entities.Goblin());
    this.addEntityAt(14, 7, goblin);
	var goblin2 = new Lootr.Entity(Lootr.Entities.Goblin());
    this.addEntityAt(17, 2, goblin2);

    // Add items to map
    var woodenSword = new Lootr.Item(Lootr.Items.WoodenSword);
    this.addItemAt(7, 7, woodenSword);

    // Add player to map
    var player = new Lootr.Player(Lootr.Entities.Player());
    Lootr.setPlayer(player);
    this.addEntityAt(10, 10, player);
}
Lootr.Maps.Overworld.extend(Lootr.Map);

Lootr.Maps.Overworld.prototype.generateWorld = function () {

    var temp_map = this.createEmptyMap();

    // Setup generator
    var generator = new ROT.Map.Cellular(this._width, this._height);

    // Update our map
    // x on screen
    // y on screen
    // v seems to be 1 or 0
    // First Create Floor
    generator.randomize(1);
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            // temp_map[x][y] = new Lootr.Tiles.FloorTile();
            temp_map[x][y] = new Lootr.Tile(Lootr.Tiles.FloorTile);
        }
    });

    // Build Walls
    generator.randomize(.5);
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            temp_map[x][y] = new Lootr.Tile(Lootr.Tiles.WallTile);
            // temp_map[x][y] = new Lootr.Tiles.WallTile();
        }
    });

    // Generate DeepWater
    generator.randomize(.14);
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            temp_map[x][y] = new Lootr.Tile(Lootr.Tiles.WaterDeepTile);
            // temp_map[x][y] = new Lootr.Tiles.WaterDeepTile();
        }
    });

    // Generate ShallowWater
    generator.randomize(.24);
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            temp_map[x][y] = new Lootr.Tile(Lootr.Tiles.WaterShallowTile);
            // temp_map[x][y] = new Lootr.Tiles.WaterShallowTile();
        }
    });

    // Generate Ruby
    generator.randomize(.05);
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            temp_map[x][y] = new Lootr.Tile(Lootr.Tiles.RubyTile);
            // temp_map[x][y] = new Lootr.Tiles.RubyTile();
        }
    });

    // Generate Gold
    generator.randomize(.08);
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            temp_map[x][y] = new Lootr.Tile(Lootr.Tiles.GoldTile);
            // temp_map[x][y] = new Lootr.Tiles.GoldTile();
        }
    });


    // for ( var x = 0; x < temp_map.length; x++ ) {
    //     for ( var y = 0; y < temp_map[0].length; y++) {
    //         var ran = ROT.RNG.getUniformInt(0, 100);
    //         if (ran > 74) {
    //             temp_map[x][y] = new Lootr.Tiles.WaterShallowTile();
    //         }
    //     }
    // }

    return temp_map;
}
