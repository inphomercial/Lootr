'use strict';

class Overworld extends Map {
	constructor(args) {
		super(args);

		this._width = 80;
		this._height = 80;
		this._tiles = this.generateWorld();

		// Add entities to map
		var goblin = new Entity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(13, 7, goblin);

		var goblin2 = new Entity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(18, 12, goblin2);

		var ghost = new Entity(Lootr.Templates.Entities.Ghost);
		this.addEntityAt(18, 24, ghost);

		var bat = new Entity(Lootr.Templates.Entities.Bat);
		this.addEntityAt(6, 10, bat);
		
		var rat1 = new Entity(Lootr.Templates.Entities.Rat);
		this.addEntityAt(16, 10, rat1);
		
		var rat2 = new Entity(Lootr.Templates.Entities.Rat);
		this.addEntityAt(17, 10, rat2);
		
		var slime = new Entity(Lootr.Templates.Entities.Slime);
		this.addEntityAt(6, 8, slime);

		// Add items to map
		var woodenShield = new Item(Lootr.Templates.Items.WoodenShield);
		this.addItemAt(4, 8, woodenShield);
		
		var dagger = new Item(Lootr.Templates.Items.Dagger);
		this.addItemAt(15, 8, dagger);

		// Add player to map
		var player = new Player(Lootr.Templates.Entities.Player);
		Lootr.setPlayer(player);
		this.addEntityAt(10, 10, player);
		
		// Start player with a placeholder item for now
		var woodenSword = new Item(Lootr.Templates.Items.WoodenSword);
		player.getComponent("Inventory").inventory.push(woodenSword);

		//compute the player's initial line of sight
		player.computeFOV();
		
		console.log('overworld', this);
	}

	generateWorld() {

		var temp_map = this.createEmptyMap();
		const Templates = Lootr.Templates;

		// Setup generator
		var generator = new ROT.Map.Cellular(this._width, this._height, { connected: true });

		// Update our map
		// x on screen
		// y on screen
		// v seems to be 1 or 0
		// First Create Floor
		generator.randomize(0.5);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.WallTile, x, y);
			} else {
				temp_map[x][y] = new Tile(Templates.Tiles.FloorTile, x, y);
			}
		});

		generator.connect( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.WallTile, x, y);
			} else {
				temp_map[x][y] = new Tile(Templates.Tiles.FloorTile, x, y);
			}
		});

		// Generate DeepWater
		generator.randomize(.14);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.WaterDeepTile, x, y);
			}
		});

		// Generate ShallowWater
		generator.randomize(.24);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.WaterShallowTile, x, y);
			}
		});

		// Generate Ruby
		generator.randomize(.05);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.RubyTile, x, y);
			}
		});

		// Generate Gold
		generator.randomize(.08);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = new Tile(Templates.Tiles.GoldTile, x, y);
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

