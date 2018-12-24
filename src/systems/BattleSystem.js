'use strict';

const BattleSystem = (attacker, defender) => {

	console.log('BATTTTTLE', attacker, defender);

	let currentX = defender.getX();
	let currentY = defender.getY();
	let map = defender.getMap();

	if (!defender.hasComponent('Health')) {
		return;
	}
	
	console.log(`${attacker.getName()} attacks ${defender.getName()}`);

	// This will obviously be the Attack damage instead of just a 2
	defender._components.Health.hp -= 2;

	if (defender.hasComponent("Bleedable")) {

		// We need a function to get a random adjacent tile from an x, y
		let tile = map.getTile(currentX+1, currentY);
		tile._foreground = defender._components.Bleedable.color;
	}

	if (defender._components.Health.hp <= 0) {
		console.log('map before', map);	
		map.removeEntity(defender);
		console.log('map after', map);

		var corpse = new Item(Lootr.Templates.Items.Corpse);
		map.addItemAt(currentX, currentY, corpse);
		// defender._isAlive = false;
		// defender._char = "%";
		// defender._foreground = "red";
	}
}