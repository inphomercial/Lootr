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

		this.addEnemies();
		this.addItems();
		
		// Start player with a placeholder item for now
		var dagger = createItem(Lootr.Templates.Items.Dagger);
		var sword1 = createItem(Lootr.Templates.Items.WoodenSword);
		var shield = createItem(Lootr.Templates.Items.WoodenShield);

		let InventoryComponent = player.getComponent('Inventory');
		InventoryComponent.addItem(player, sword1);
		InventoryComponent.addItem(player, dagger);
		InventoryComponent.addItem(player, shield);

		player.getComponent("Slots").slots.hand = shield;

		//compute the player's initial line of sight
		player.computeFOV();

		this.getEngine().start();
		
		console.log('overworld', this);
	}

	addItems() {
		// Add items to map
		let woodenShield = createItem(Lootr.Templates.Items.WoodenShield);
		this.addItemAt(...this.getRandomUnexploredPassableTile().getCoordinates(), woodenShield);
		
		let dagger = createItem(Lootr.Templates.Items.Dagger);
		this.addItemAt(...this.getRandomUnexploredPassableTile().getCoordinates(), dagger);
	
		for(let i = 0; i < 50; i++) {
			let gold = createItem(Lootr.Templates.Items.Gold);
			this.addItemAt(...this.getRandomUnexploredPassableTile().getCoordinates(), gold);
		}
	}

	addEnemies() {
		// Add entities to map
		var goblin = createEntity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), goblin);

		var goblin2 = createEntity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), goblin2);

		var ghost = createEntity(Lootr.Templates.Entities.Ghost);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), ghost);

		var bat = createEntity(Lootr.Templates.Entities.Bat);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), bat);
		
		var rat1 = createEntity(Lootr.Templates.Entities.Rat);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), rat1);
		
		var rat2 = createEntity(Lootr.Templates.Entities.Rat);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), rat2);
		
		var slime = createEntity(Lootr.Templates.Entities.Slime);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), slime);
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
		generator.randomize(.14);
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

