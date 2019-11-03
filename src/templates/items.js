'use strict';

Lootr.Templates.Items.WoodenSword = {
	template: "WoodenSword",
	name: "Wooden Sword",
    char: "!",
	foreground: "brown",
	background: "white",
	description: "A crappy wooden sword",

	componentList: {
		'Wieldable': { 
			slot: SLOTS.HAND
		},
		'Rarity': {
			rarity: 'common'
		},
		'Damage': {
			die: 2,
			type: ABILITY_TYPES.STR
		},
		'Attack': {
			attack: 2
		}
	}
}

Lootr.Templates.Items.Gold = {
	template: "Gold",
	name: "Gold",
	char: "$",
	foreground: ["gold", 'yellow'],
	description: "Gold coin",

	componentList: {
		'Value': {
			value: 5,
			randomize: true
		}
	}
}

Lootr.Templates.Items.Dagger = {
	template: "Dagger",
	name: "Dagger",
    char: ")",
	foreground: 'white',
	description: "A golden dagger",

	componentList: {
		'Wieldable': {
			slot: SLOTS.HAND
		},
		'Rarity': {
			rarity: 'common'
		},
		'Attack': {
			attack: 4
		},
		"Damage": {
			die: 4,
			type: ABILITY_TYPES.STR
		}
	}
}

Lootr.Templates.Items.Helm = {
	template: "Helm",
	name: "A Helmet",
	char: '^',
	foreground: 'silver',
	background: 'brown',
	description: "A shiny helmet",

	componentList: {
		'Wieldable': {
			slot: SLOTS.HEAD
		}
	}
}

Lootr.Templates.Items.Corpse = {
	template: "Corpse",
	name: "Corpse",
	char: '%',
	foreground: 'red',
	background: 'brown',
	description: "A bloodied corpse",

	componentList: {}
}

Lootr.Templates.Items.WoodenShield = {
	template: "WoodenShield",
	name: "Wooden Shield",
	// Glphy Values
	char: "]",
	foreground: "brown",
	background: "white",
	description: "A crappy wooden shield",

	// Proposed idea for passing unique values to the components
	componentList: {
		'Wieldable': {
			slot: SLOTS.HAND
		},
		'Defense': {
			defense: 4 
		},
		'Rarity': {
			rarity: 'ultra rare'
		},
		"Damage": {
			die: 2,
			type: ABILITY_TYPES.STR
		}
	}
};
