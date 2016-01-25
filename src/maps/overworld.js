'use strict';

Lootr.Maps.Overworld = function ( args ) {

    this._width = 500;
    this._height = 500;

    var map = this.generateWorld();

    // Overworld extends Map getting all its attributes
    // Passing in the generated tiles
    Lootr.Map.call(this, map);

    // Add entities to map
    var goblin = Lootr.EntitiesRepository.create('Goblin');
    this.addEntityAt(14, 7, goblin);

    // Add items to map
    var woodenSword = Lootr.ItemsRepository.create('WoodenSword');
    this.addItemAt(7, 7, woodenSword);

    // Add player to map
    var player = new Lootr.Player({name: "inpho", char: "@", foreground: "red"});
    this.addEntityAt(10, 10, player);
}
Lootr.Maps.Overworld.extend(Lootr.Map);

Lootr.Maps.Overworld.prototype.generateWorld = function () {

    var temp_map = this.createEmptyMap();

    // Setup generator
    var generator = new ROT.Map.Cellular(this._width, this._height);
    generator.randomize(.8);

    // Update our map
    generator.create( function ( x, y, v ) {
        if ( v === 1 ) {
            temp_map[x][y] = new Lootr.Tiles.WallTile();
        } else {
            temp_map[x][y] = new Lootr.Tiles.WaterDeepTile();
        }
    });

    for ( var x = 0; x < temp_map.length; x++ ) {
        for ( var y = 0; y < temp_map[0].length; y++) {
            var ran = ROT.RNG.getUniformInt(0, 100);
            if (ran > 90) {
                temp_map[x][y] = new Lootr.Tiles.WaterShallowTile();
            }
        }
    }

    return temp_map;
}
