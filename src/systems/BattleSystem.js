'use strict';

const BattleSystem = (attacker, defender) => {

	// Prevent monsters from attacking from each other
	if (attacker.hasComponent('Enemy') && defender.hasComponent('Enemy')) {
		return;
	}

	// Prevent attacking defenders that dont actually have health
	if (!defender.hasComponent('Health')) {
		return;
	}
	
	let currentX = defender.getX();
	let currentY = defender.getY();
	let map = defender.getMap();
	
	Logger(`${attacker.getName()} attacks ${defender.getName()}`);

	// This will obviously be the Attack damage instead of just a 2
	defender._components.Health.hp -= 2;
	Logger(`${ defender.getName() } has taken damage.`);

	if (defender.hasComponent("Bleedable")) {
		// We need a function to get a random adjacent tile from an x, y
		let tile = map.getTile(currentX+1, currentY);
		tile._foreground = defender._components.Bleedable.bleedColor;
	}

	// Testing burnable
	// if (defender.hasComponent('Burnable')) {
	// 	let BurnableComponent = defender.getComponent('Burnable');

	// 	BurnableComponent.setOnFire(defender, 'red');
	// 	BurnableComponent.setOnFire(defender, 'yellow');
	// }

	if (defender._components.Health.hp <= 0) {

		// Player has died, restart game
		if (defender.hasComponent("Player")) {
			Lootr.switchScreen(new Display(Lootr.Screens.GameOver));

			return;
		}

		Logger(`${defender.getName()} has died.`);

		if (defender.hasComponent("Corpseable")) {
			var corpse = createItem(Lootr.Templates.Items.Corpse);
			map.addItemAt(currentX, currentY, corpse);
		}

		map.removeEntity(defender);
	}
}