'use strict';

Lootr.Templates.Items.WoodenSword = {
    char: "!",
	foreground: "brown",
	background: "white",

	componentList: {
		'Wieldable': {},
		'Rarity': {
			rarity: 'common'
		}
	}
}

Lootr.Templates.Items.WoodenShield = {
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
