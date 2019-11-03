
Lootr.ItemComponents = {};

Lootr.ItemComponents.Wieldable = function Wieldable(template) {
	return {
		name: 'Wieldable',
		slot: template.slot
	}
};

Lootr.ItemComponents.Attack = function Attack(template) {
	return {
		name: 'Attack',
		attack: template.attack
	}
};

Lootr.ItemComponents.Defense = function Defense(template) {
	return {
		name: 'Defense',
		defense: template.defense
	}
};

Lootr.ItemComponents.Rarity = function Rarity(template) {
	return {
		name: 'Rarity',
		rarity: template.rarity
	}
};

/**
 * This deteremines the damage an item can do
 * die (the max faces of a dice. 6 = a D6, 20 = a D20, etc)
 */
Lootr.ItemComponents.Damage = function Damage(template) {
	return {
		name: 'Damage',
		die: template.die || 6,
		type: template.type || ABILITY_TYPES.STR		
	}
}