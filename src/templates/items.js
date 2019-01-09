'use strict';

Lootr.Templates.Items.WoodenSword = {
	name: "Wooden Sword",
    char: "!",
	foreground: "brown",
	background: "white",
	description: "A crappy wooden sword",

	componentList: {
		'Wieldable': {},
		'Rarity': {
			rarity: 'common'
		},
		'Attack': {
			attack: 2
		}
	}
}

Lootr.Templates.Items.Gold = {
	name: "Gold",
	char: "$",
	foreground: "gold",
	description: "Gold coin",

	componentList: {}
}

Lootr.Templates.Items.Dagger = {
	name: "Dagger",
    char: ")",
	foreground: "gold",
	description: "A golden dagger",

	componentList: {
		'Wieldable': {},
		'Rarity': {
			rarity: 'common'
		},
		'Attack': {
			attack: 4
		}
	}
}

Lootr.Templates.Items.Corpse = {
	name: "Corpse",
	char: '%',
	foreground: 'red',
	background: 'brown',
	description: "A bloodied corpse",

	componentList: {}
}

Lootr.Templates.Items.WoodenShield = {
	name: "Wooden Shield",
	// Glphy Values
	char: "]",
	foreground: "brown",
	background: "white",
	description: "A crappy wooden shield",

	// Proposed idea for passing unique values to the components
	componentList: {
		'Wieldable': {},
		'Defense': {
			defense: 4 
		},
		'Rarity': {
			rarity: 'ultra rare'
		}
	}
};
