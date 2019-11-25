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
	// default unarmed attack is 2d
	let rollDamage = Lootr.Utilities.rollD(2);

	// get item being used, to determine ability type (str, dex, wis)
	if (attacker.hasComponent('Slots')) {
		if (!Lootr.EntitySystems.Slots.isSlotEmpty(attacker, SLOTS.HAND_1)) {
			const item = Lootr.EntitySystems.Slots.getItemFromSlot(attacker, SLOTS.HAND_1);	
			
			statUsed = Lootr.ItemSystems.Damage.getDamageType(item);
			rollDamage = Lootr.ItemSystems.Damage.getRollDamage(item);
		}		
	}

	// then roll damage
	let damage = rollDamage ? rollDamage : Lootr.EntitySystems.Stats.getAttack(attacker);
	
	if (!defender.hasComponent('ArmorClass')) {
		LoggerError(`Battlesystem defender ${ defender.getName() } has no armor class component!`);		
	}

	// get defenders AC
	defenderAc = Lootr.EntitySystems.ArmorClass.getArmorClass(defender);	

	// first check if hits using ability check
	// Pass false for advantage and disadvantage for now
	const abilityCheckResult = AbilityCheckSystem(attacker, statUsed, defenderAc, false, false);	
	if (!abilityCheckResult) {
		LoggerPlayer(`You failed to hit the ${ defender.getName() }`);
		return;
	}
	
	// If no damage is done, return early
	if (damage < 1) {
		LoggerPlayer(`${attacker.getName()} attacks ${defender.getName()} but takes no damage.`);
		return;
	}

	// then apply damage
	Lootr.EntitySystems.Health.removeHealth(defender, damage);

	LoggerPlayer(`${attacker.getName()} attacks ${defender.getName()} for ${damage}`);

	_checkForBleedable(defender, map, currentX, currentY);

	// Testing Burning
	// _checkForBurning(defender);

	if (Lootr.EntitySystems.Health.getHp(defender) <= 0) {
		// Player has died, restart game
		if (!_checkForPlayerDead(defender)) {
			return;
		}

		LoggerPlayer(`${defender.getName()} has died.`);

		_checkForCorpse(defender, map, currentX, currentY);

		_checkForGoldOnDefender(attacker, defender);

		map.removeEntity(defender);
	}


	function _checkForGoldOnDefender(attacker, defender) {
		if (defender.hasComponent('GoldHolder') && attacker.hasComponent('Player')) {
			// Make this based on the GoldHolder.dropChance value
			if (Lootr.Utilities.flipBasedOnChance(50)) {

				let amountDropped = Lootr.EntitySystems.GoldHolder.getGold(defender);
				Lootr.EntitySystems.GoldHolder.addGold(attacker, amountDropped);

				LoggerPlayer(`You get ${amountDropped} gold from the ${defender.getName()}`);
			}
			Lootr.Utilities.getRandomInt()
		}

	}

	function _checkForPlayerDead(defender) {
		// Player has died, restart game
		if (defender.hasComponent("Player")) {
			Lootr.switchScreen(new Display(Lootr.Screens.GameOver));

			return false;
		}

		return true
	}

	function _checkForCorpse(defender, map, x, y) {
		if (defender.hasComponent("Corpseable")) {
			var corpse = createItem(Lootr.Templates.Items.Corpse);
			map.addItemAt(x, y, corpse);
		}
	}

	function _checkForBleedable(defender, map, x, y) {
		if (defender.hasComponent("Bleedable")) {
			// We need a function to get a random adjacent tile from an x, y
			let tile = map.getTile(x + 1, y);
			tile._foreground = defender._components.Bleedable.bleedColor;
		}
	}

	function _checkForBurning(defender) {		
		if (defender.hasComponent('Burnable')) {
			let BurnableComponent = defender.getComponent('Burnable');

			BurnableComponent.setOnFire(defender, 'red');
			BurnableComponent.setOnFire(defender, 'yellow');
		}
	}
}

