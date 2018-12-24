'use strict';

class Overworld extends Map {
	constructor(args) {
		super(args);

		this._width = 500;
		this._height = 500;
		this._tiles = this.generateWorld();

		// Add entities to map
		var goblin = new Entity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(13, 7, goblin);

		var goblin2 = new Entity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(18, 12, goblin2);

		// Add items to map
		var woodenSword = new Item(Lootr.Templates.Items.WoodenSword);
		this.addItemAt(7, 7, woodenSword);
		
		var woodenShield = new Item(Lootr.Templates.Items.WoodenShield);
		this.addItemAt(4, 8, woodenShield);

		// Add player to map
		var player = new Player(Lootr.Templates.Entities.Player);
		Lootr.setPlayer(player);
		this.addEntityAt(10, 10, player);
		
		console.log('overworld', this);
	}

	generateWorld() {

		var temp_map = this.createEmptyMap();
		const Templates = Lootr.Templates;

		// Setup generator
		var generator = new ROT.Map.Cellular(this._width, this._height);

		// Update our map
		// x on screen
		// y on screen
		// v seems to be 1 or 0
		// First Create Floor
		generator.randomize(1);
		generator.create( function ( x, y, v ) {
			temp_map[x][y] = new Tile(Templates.Tiles.FloorTile);
		});

		// Build Walls
		generator.randomize(.5);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.WallTile);
			}
		});

		// Generate DeepWater
		generator.randomize(.14);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.WaterDeepTile);
			}
		});

		// Generate ShallowWater
		generator.randomize(.24);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.WaterShallowTile);
			}
		});

		// Generate Ruby
		generator.randomize(.05);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.RubyTile);
			}
		});

		// Generate Gold
		generator.randomize(.08);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.GoldTile);
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

