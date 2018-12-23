'use strict';

Lootr.Templates.Items.WoodenSword = {
    char: "!",
	rarity: "common",
	foreground: "brown",
	background: "white",
	componentList: ['Wieldable']
}

Lootr.Templates.Items.WoodenShield = {
	// Glphy Values
	char: "]",
	foreground: "brown",
	background: "white",

	// Item Values
	rarity: "rare",
	defense: 4,
	componentList: ['Wieldable']

	// Proposed idea for passing unique values to the components
	// componentList: {
	// 	'Wieldable': {
	// 		'defense': 4
	// 	}
	// }
};
