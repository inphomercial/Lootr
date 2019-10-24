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

	let damage = Lootr.ComponentSystems.Stats.getAttack(attacker);
	let defense = Lootr.ComponentSystems.Stats.getDefense(defender);

	let damageTaken = Lootr.Utilities.getRandomInt(0, damage) - Lootr.Utilities.getRandomInt(0, defense);

	// If no damage is done, return early
	if (damageTaken < 1) {
		Logger(`${attacker.getName()} attacks ${defender.getName()} but takes no damage.`);
		return;
	}

	Lootr.ComponentSystems.Health.removeHealth(defender, damageTaken);

	Logger(`${attacker.getName()} attacks ${defender.getName()} for ${ damageTaken }`);

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

	if (Lootr.ComponentSystems.Health.getHp(defender) <= 0) {
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

		if (defender.hasComponent("GoldDropper")) {
			let goldItem = createItem(Lootr.Templates.Items.Gold);
			map.addItemAt(currentX, currentY, goldItem);
		}

		map.removeEntity(defender);
	}
}