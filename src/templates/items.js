'use strict';

Lootr.Templates.Items.WoodenSword = {
	name: "Wooden Sword",
    char: "!",
	foreground: "brown",
	background: "white",

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

Lootr.Templates.Items.Dagger = {
	name: "Dagger",
    char: ")",
	foreground: "gold",

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

	componentList: {}
}

Lootr.Templates.Items.WoodenShield = {
	name: "Wooden Shield",
	// Glphy Values
	char: "]",
	foreground: "brown",
	background: "white",

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
