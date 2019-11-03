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

	// DEFAULTS until it's all implemented
	//
	// stat to use if no item
	let statUsed = ABILITY_TYPES.STR;		
	// get defenders AC number
	let defenderAc = 10
	// default to 2
	let rollDamage = 2;

	// get item being used, to determine ability type (str, dex, wis)
	if (attacker.hasComponent('Slots')) {
		if (!Lootr.EntitySystems.Slots.isSlotEmpty(attacker, SLOTS.HAND)) {
			const item = Lootr.EntitySystems.Slots.getItemFromSlot(attacker, SLOTS.HAND);		
			
			statUsed = Lootr.ItemSystems.Damage.getDamageType(item);
			rollDamage = Lootr.ItemSystems.Damage.getRollDamage(item);

			console.log("item using", item);
			console.log("item roll damage", rollDamage);
			console.log("item state used", statUsed);	
		}
	}

	// then roll damage
	let damage = rollDamage ? rollDamage : Lootr.EntitySystems.Stats.getAttack(attacker);
	
	if (!defender.hasComponent('ArmorClass')) {
		console.log("Battlesystem defender has no armor class!");
	}

	// get defenders AC
	defenderAc = Lootr.EntitySystems.ArmorClass.getArmorClass(defender);	

	// first check if hits using ability check
	// Pass false for advantage and disadvantage for now
	const abilityCheckResult = AbilityCheckSystem(attacker, statUsed, defenderAc, false, false);	
	if (!abilityCheckResult) {
		Logger(`You failed to hit the ${ defender.getName() }`);
		return;
	}
	
	// If no damage is done, return early
	if (damage < 1) {
		Logger(`${attacker.getName()} attacks ${defender.getName()} but takes no damage.`);
		return;
	}

	// then apply damage
	Lootr.EntitySystems.Health.removeHealth(defender, damage);

	Logger(`${attacker.getName()} attacks ${defender.getName()} for ${damage}`);

	checkForBleedable(defender, map, currentX, currentY);

	// Testing Burning
	// testBurning(defender);

	if (Lootr.EntitySystems.Health.getHp(defender) <= 0) {
		// Player has died, restart game
		if (!checkForPlayerDead(defender)) {
			return;
		}

		Logger(`${defender.getName()} has died.`);

		checkForCorpse(defender, map, currentX, currentY);

		checkForGoldOnDefender(attacker, defender);

		map.removeEntity(defender);
	}


	function checkForGoldOnDefender(attacker, defender) {
		if (defender.hasComponent('GoldHolder') && attacker.hasComponent('Player')) {
			// Make this based on the GoldHolder.dropChance value
			if (Lootr.Utilities.flipBasedOnChance(50)) {

				let amountDropped = Lootr.EntitySystems.GoldHolder.getGold(defender);
				Lootr.EntitySystems.GoldHolder.addGold(attacker, amountDropped);

				Logger(`You get ${amountDropped} gold from the ${defender.getName()}`);
			}
			Lootr.Utilities.getRandomInt()
		}

	}

	function checkForPlayerDead(defender) {
		// Player has died, restart game
		if (defender.hasComponent("Player")) {
			Lootr.switchScreen(new Display(Lootr.Screens.GameOver));

			return false;
		}

		return true
	}

	function checkForCorpse(defender, map, x, y) {
		if (defender.hasComponent("Corpseable")) {
			var corpse = createItem(Lootr.Templates.Items.Corpse);
			map.addItemAt(x, y, corpse);
		}
	}

	function checkForBleedable(defender, map, x, y) {
		if (defender.hasComponent("Bleedable")) {
			// We need a function to get a random adjacent tile from an x, y
			let tile = map.getTile(x + 1, y);
			tile._foreground = defender._components.Bleedable.bleedColor;
		}
	}

	function testBurning(defender) {		
		if (defender.hasComponent('Burnable')) {
			let BurnableComponent = defender.getComponent('Burnable');

			BurnableComponent.setOnFire(defender, 'red');
			BurnableComponent.setOnFire(defender, 'yellow');
		}
	}
}

