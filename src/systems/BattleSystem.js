'use strict';

const BattleSystem = (attacker, defender) => {

	console.log('BATTTTTLE', attacker, defender);

    if (!defender.hasComponent('Health')) {
        return;
	}
	
	console.log(`${attacker.getName()} attacks ${defender.getName()}`);

	// This will obviously be the Attack damage instead of just a 5
	defender._components.Health.hp -= 2;

	if (defender.hasComponent("Bleedable")) {
		let map = defender.getMap();
		let currentX = defender.getX();
		let currentY = defender.getY();

		// We need a function to get a random adjacent tile from an x, y
		let tile = map.getTile(currentX+1, currentY);
		tile._foreground = defender._components.Bleedable.color;
	}

	console.log(`${defender.getName()} took 5 hits`);

	if (defender._components.Health.hp <= 0) {
		defender._isAlive = false;
		defender._char = "%";
		defender._foreground = "red";
	}
}