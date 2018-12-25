'use strict';

const BattleSystem = (attacker, defender) => {

	let currentX = defender.getX();
	let currentY = defender.getY();
	let map = defender.getMap();

	if (!defender.hasComponent('Health')) {
		return;
	}
	
	Logger(`${attacker.getName()} attacks ${defender.getName()}`);

	// This will obviously be the Attack damage instead of just a 2
	defender._components.Health.hp -= 2;
	console.log(`${defender.getName()} health ${defender._components.Health.hp}`);

	if (defender.hasComponent("Bleedable")) {
		// We need a function to get a random adjacent tile from an x, y
		let tile = map.getTile(currentX+1, currentY);
		tile._foreground = defender._components.Bleedable.bleedColor;
	}

	if (defender._components.Health.hp <= 0) {
		Logger(`${defender.getName()} has died.`);

		map.removeEntity(defender);

		var corpse = new Item(Lootr.Templates.Items.Corpse);
		map.addItemAt(currentX, currentY, corpse);
	}
}