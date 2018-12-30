'use strict';

Lootr.Templates.Entities.Player = {
    name: "Player",
    char: "@",
	foreground: "red",
	speed: 2,
	componentList: {
		"Actor": {},
		"Health": {
			hp: 100
		},
		"Moveable": {},
		"PassThroughSolids": {},
		"Bleedable": {
			bleedColor: "red"
		},
		"Inventory": {
			inventory: ["sword", "shield"] // placeholders
		}
	}
};

Lootr.Templates.Entities.Goblin = {
    name: "Goblin",
    char: "g",
	foreground: "green",
	speed: 1,
	componentList: {
		"Actor": {},
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 10
		},
		"Bleedable": {
			bleedColor: "red"
		},
		"Corpseable": {}
	}
};

Lootr.Templates.Entities.Slime = {
	name: "Slime",
	char: "s",
	foreground: "green",
	speed: 1,
	componentList: {
		"Actor": {},
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 15
		},
		"Bleedable": {
			bleedColor: "green"
		}
	}
}

Lootr.Templates.Entities.Bat = {
	name: "Bat",
	char: "b",
	foreground: "black",
	background: "red",
	speed: 4,
	componentList: {
		"Actor": {},
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 5
		},
		"Bleedable": {
			bleedColor: "red"
		},
		"Flying": {},
		"Corpseable": {}
	}
}

Lootr.Templates.Entities.Ghost = {
    name: "Ghost",
    char: "h",
	foreground: "white",
	componentList: {
		"Actor": {},
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 30
		},
		"PassThroughSolids": {},
		"Flying": {}
	}
};
