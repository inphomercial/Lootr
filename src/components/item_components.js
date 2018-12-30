
Lootr.ItemComponents = {};

Lootr.ItemComponents.Wieldable = function Wieldable(template) {
	return {
		name: 'Wieldable'
	}
};

Lootr.ItemComponents.Attack = function Attack(template) {
	return {
		name: 'Attack',
		defense: template.attack
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