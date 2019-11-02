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

	// this needs to be re-worked
	// get item being used, to determine ability type (str, dex, wis)
	const statUsed = 'Str';
	console.log("player components", Lootr.getPlayer());
	if (attacker.hasComponent('Slots')) {
		if (!Lootr.EntitySystems.Slots.isSlotEmpty(attacker, 'hand')) {
			const item = Lootr.EntitySystems.Slots.getItemFromSlot(attacker, 'hand');	
			const type = Lootr.ItemSystems.Damage.getDamageType(item);

			console.log("item using", item);
			console.log("item type", type);
		}		
	}
	
	// get defenders AC number
	const defenderAc = 10

	// first check if hits using ability check
	let result = AbilityCheckSystem(attacker, statUsed, defenderAc, false, false);
	console.log("battle system ability check result", result);


	// then roll damage
	// Lootr.ItemSystems.Damage.getRollDamage()

	// then apply damage


	let currentX = defender.getX();
	let currentY = defender.getY();
	let map = defender.getMap();

	let damage = Lootr.EntitySystems.Stats.getAttack(attacker);
	let defense = Lootr.EntitySystems.Stats.getDefense(defender);

	let damageTaken = Lootr.Utilities.getRandomInt(0, damage) - Lootr.Utilities.getRandomInt(0, defense);

	// If no damage is done, return early
	if (damageTaken < 1) {
		Logger(`${attacker.getName()} attacks ${defender.getName()} but takes no damage.`);
		return;
	}

	Lootr.EntitySystems.Health.removeHealth(defender, damageTaken);

	Logger(`${attacker.getName()} attacks ${defender.getName()} for ${damageTaken}`);

	if (defender.hasComponent("Bleedable")) {
		// We need a function to get a random adjacent tile from an x, y
		let tile = map.getTile(currentX + 1, currentY);
		tile._foreground = defender._components.Bleedable.bleedColor;
	}

	// Testing burnable
	// if (defender.hasComponent('Burnable')) {
	// 	let BurnableComponent = defender.getComponent('Burnable');

	// 	BurnableComponent.setOnFire(defender, 'red');
	// 	BurnableComponent.setOnFire(defender, 'yellow');
	// }

	if (Lootr.EntitySystems.Health.getHp(defender) <= 0) {
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

		if (defender.hasComponent('GoldHolder') && attacker.hasComponent('Player')) {
			// Make this based on the GoldHolder.dropChance value
			if (Lootr.Utilities.flipBasedOnChance(50)) {

				let amountDropped = Lootr.EntitySystems.GoldHolder.getGold(defender);
				Lootr.EntitySystems.GoldHolder.addGold(attacker, amountDropped);

				Logger(`You get ${amountDropped} gold from the ${defender.getName()}`);
			}
			Lootr.Utilities.getRandomInt()
		}

		map.removeEntity(defender);
	}
}