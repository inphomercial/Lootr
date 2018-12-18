'use strict';

class Overworld extends Map {
	constructor(args) {
		super(args);

		this._width = 500;
		this._height = 500;

		console.log('this', this);

		this._tiles = this.generateWorld();

		// Overworld extends Map getting all its attributes
		// Passing in the generated tiles
		// Lootr.Map.call(this, map);

		// Add entities to map
		var goblin = new Entity(Lootr.Entities.Goblin());
		this.addEntityAt(14, 7, goblin);
		var goblin2 = new Entity(Lootr.Entities.Goblin());
		this.addEntityAt(17, 2, goblin2);

		// Add items to map
		var woodenSword = new Item(Lootr.Items.WoodenSword);
		this.addItemAt(7, 7, woodenSword);

		// Add player to map
		var player = new Player(Lootr.Entities.Player());
		Lootr.setPlayer(player);
		this.addEntityAt(10, 10, player);
	}

	generateWorld() {

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
				temp_map[x][y] = new Tile(Lootr.Tiles.FloorTile);
			}
		});

		// Build Walls
		generator.randomize(.5);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Lootr.Tiles.WallTile);
			}
		});

		// Generate DeepWater
		generator.randomize(.14);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Lootr.Tiles.WaterDeepTile);
			}
		});

		// Generate ShallowWater
		generator.randomize(.24);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Lootr.Tiles.WaterShallowTile);
			}
		});

		// Generate Ruby
		generator.randomize(.05);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Lootr.Tiles.RubyTile);
			}
		});

		// Generate Gold
		generator.randomize(.08);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Lootr.Tiles.GoldTile);
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
}
// Lootr.Maps.Overworld.extend(Lootr.Map);

