'use strict';

/**
 * Used to do the D20 ability check roll
 * Using score modifiers
 * 
 * entity (player or monster object)
 * stat ('Wis', 'Str', 'Dex')
 * challengeNumber (for an attack it's their (AC) Armor Class)
 *                 (for everything else it's their (DC) Difficulty class)
 * hasAdvantage (true/false) allows for 2 rolls 
 * hasDisadvantage (true/false) allows for 2 rolls 
 */
const AbilityCheckSystem = (entity, stat, challengeNumber, hasAdvantage = false, hasDisadvantage = false) => {

	if (!entity.hasComponent('Stats')) {
		LoggerError("Stats component required on entity.")
		return;
	}
	
	let roll;

	// If has advantage or disavantage (roll the d20 twice)
	if (hasAdvantage || hasDisadvantage) {    
		if (hasAdvantage) {
			roll = Lootr.Utilities.rollD20Advantage();
		} else {
			roll = Lootr.Utilities.rollD20Disadvantage();
		}

		 // If they have both advantage and disadvantage, we just roll a normal d20
		 // and overwrite the previous rolls
		 if (hasAdvantage && hasDisadvantage) {
			roll = Lootr.Utilities.rollD20();
		}

	// otherwise, we generate a D20 roll
	} else {
		roll = Lootr.Utilities.rollD20();
	} 

	// IF the roll is a 1 or a 20, you get an immediate fail or success
	if (roll === 1) {
		return false;
	}

	if (roll === 20) {
		return true;
	}

	// get entity stat value
	const statString = `get${ stat }`;
	let entityStat = null;

	if (entity.hasComponent('Player')) {
		entityStat = GetTotalStatsSystem(entity, stat);		
	} else {		
		entityStat = Lootr.EntitySystems.Stats[statString](entity);
	}
	
	// get modifier score for the stat
	const modifier = Lootr.EntitySystems.Stats.getModiferScore(entityStat);    

	// apply bonuses + modifer to roll
	const total = roll + modifier;    

	// compare against total to a target number
	// for an attack it's their (AC) Armor Class
	// for everything else it's their (DC) Difficulty class
	return total >= challengeNumber;
}