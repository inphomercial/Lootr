'use strict';

class Overworld extends Map {
	constructor(args) {
		super(args);

		this._width = 80;
		this._height = 80;
		this._tiles = this.generateWorld();

		// Add player to map
		var player = new Player(Lootr.Templates.Entities.Player);
		Lootr.setPlayer(player);

		const startingCoords = this.getRandomUnexploredPassableTile().getCoordinates();
		this.addEntityAt(...startingCoords, player);
		this.computeUnreachableTiles(...startingCoords);

		this.addEnemiesToMap();
		this.addItemsToMap();
		
		// Start player with a placeholder item for now
		var shield = createItem(Lootr.Templates.Items.WoodenShield);

		Lootr.EntitySystems.Inventory.addItem(player, createItem(Lootr.Templates.Items.Dagger));
		Lootr.EntitySystems.Inventory.addItem(player, createItem(Lootr.Templates.Items.WoodenSword));
		Lootr.EntitySystems.Inventory.addItem(player, shield);

		player.getComponent("Slots").slots.hand = shield;

		//compute the player's initial line of sight
		player.computeFOV();

		this.getEngine().start();
		
		DebugLogger('overworld', this);
	}

	addItemsToMap() {
		// Add items to map
		this.addItems(Lootr.Templates.Items.Gold, Lootr.Utilities.getRandomInt(25, 100));
		this.addItems(Lootr.Templates.Items.Dagger, Lootr.Utilities.getRandomInt(0, 2));
		this.addItems(Lootr.Templates.Items.WoodenShield, Lootr.Utilities.getRandomInt(0, 3));
		this.addItems(Lootr.Templates.Items.Helm, Lootr.Utilities.getRandomInt(0, 10));
	}

	addEnemiesToMap() {
		// Add entities to map
		this.addEntities(Lootr.Templates.Entities.Spider, Lootr.Utilities.getRandomInt(5, 10));
		this.addEntities(Lootr.Templates.Entities.SpiderNest, Lootr.Utilities.getRandomInt(5, 10));
		this.addEntities(Lootr.Templates.Entities.Goblin, Lootr.Utilities.getRandomInt(5, 10));
		this.addEntities(Lootr.Templates.Entities.Ghost, Lootr.Utilities.getRandomInt(0, 10));
		this.addEntities(Lootr.Templates.Entities.Bat, Lootr.Utilities.getRandomInt(1, 2));
		this.addEntities(Lootr.Templates.Entities.Rat, Lootr.Utilities.getRandomInt(10, 20));
		this.addEntities(Lootr.Templates.Entities.Slime, Lootr.Utilities.getRandomInt(0, 5));
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
				temp_map[x][y] = createTile(Templates.Tiles.WallTile, x, y);
			} else {
				temp_map[x][y] = createTile(Templates.Tiles.FloorTile, x, y);
			}
		});

		generator.connect( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = createTile(Templates.Tiles.WallTile, x, y);
			} else {
				temp_map[x][y] = createTile(Templates.Tiles.FloorTile, x, y);
			}
		});

		// Generate DeepWater
		generator.randomize(.14);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = createTile(Templates.Tiles.WaterDeepTile, x, y);
			}
		});

		// Generate Lava
		generator.randomize(.24);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = createTile(Templates.Tiles.LavaTile, x, y);
			}
		});

		// Generate ShallowWater
		generator.randomize(.24);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = createTile(Templates.Tiles.WaterShallowTile, x, y);
			}
		});

		// Generate Ruby
		generator.randomize(.05);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = createTile(Templates.Tiles.RubyTile, x, y);
			}
		});

		// Generate Gold
		generator.randomize(.08);
		generator.create( function ( x, y, v ) {
			if ( v === 1 ) {
				temp_map[x][y] = createTile(Templates.Tiles.GoldTile, x, y);
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

