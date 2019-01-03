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
		var dagger = new Item(Lootr.Templates.Items.Dagger);
		var sword1 = new Item(Lootr.Templates.Items.WoodenSword);
		var shield = new Item(Lootr.Templates.Items.WoodenShield);
		player.getComponent("Inventory").inventory.push(sword1);
		player.getComponent("Inventory").inventory.push(dagger);
		player.getComponent("Inventory").inventory.push(dagger);
		player.getComponent("Inventory").inventory.push(dagger);
		player.getComponent("Inventory").inventory.push(dagger);
		player.getComponent("Inventory").inventory.push(dagger);
		player.getComponent("Inventory").inventory.push(dagger);
		player.getComponent("Inventory").inventory.push(dagger);
		player.getComponent("Slots").slots.hand = shield;

		//compute the player's initial line of sight
		player.computeFOV();
		
		console.log('overworld', this);
	}

	addItems() {
		// Add items to map
		var woodenShield = new Item(Lootr.Templates.Items.WoodenShield);
		this.addItemAt(...this.getRandomUnexploredPassableTile().getCoordinates(), woodenShield);
		
		var dagger = new Item(Lootr.Templates.Items.Dagger);
		this.addItemAt(...this.getRandomUnexploredPassableTile().getCoordinates(), dagger);
	}

	addEnemies() {
		// Add entities to map
		var goblin = new Entity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), goblin);

		var goblin2 = new Entity(Lootr.Templates.Entities.Goblin);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), goblin2);

		var ghost = new Entity(Lootr.Templates.Entities.Ghost);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), ghost);

		var bat = new Entity(Lootr.Templates.Entities.Bat);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), bat);
		
		var rat1 = new Entity(Lootr.Templates.Entities.Rat);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), rat1);
		
		var rat2 = new Entity(Lootr.Templates.Entities.Rat);
		this.addEntityAt(...this.getRandomUnexploredPassableTile().getCoordinates(), rat2);
		
		var slime = new Entity(Lootr.Templates.Entities.Slime);
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

