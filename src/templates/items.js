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
			slot: 'hand'
		},
		'Rarity': {
			rarity: 'common'
		},
		'Damage': {
			die: 2,
			type: 'str'
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

	componentList: {}
}

Lootr.Templates.Items.Dagger = {
	template: "Dagger",
	name: "Dagger",
    char: ")",
	foreground: 'white',
	description: "A golden dagger",

	componentList: {
		'Wieldable': {
			slot: 'hand'
		},
		'Rarity': {
			rarity: 'common'
		},
		'Attack': {
			attack: 4
		},
		"Damage": {
			die: 4,
			type: 'str'
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
			slot: 'head'
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
			slot: 'hand'
		},
		'Defense': {
			defense: 4 
		},
		'Rarity': {
			rarity: 'ultra rare'
		},
		"Damage": {
			die: 2,
			type: 'str'
		}
	}
};
