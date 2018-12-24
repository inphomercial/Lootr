'use strict';

Lootr.Templates.Entities.Player = {
    name: "Player",
    char: "@",
	foreground: "red",
	speed: 2,
	componentList: {
		"Health": {
			hp: 100
		},
		"Moveable": {},
		"PassThroughSolids": {},
		"Bleedable": {
			color: "red"
		}
	}
};

Lootr.Templates.Entities.Goblin = {
    name: "Goblin",
    char: "g",
	foreground: "green",
	speed: 1,
	componentList: {
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 10
		},
		"Bleedable": {
			color: "red"
		}
	}
};

Lootr.Templates.Entities.Ghost = {
    name: "Ghost",
    char: "h",
	foreground: "white",
	componentList: {
		"Moveable": {},
		"Enemy": {},
		"PassThroughSolids": {},
		"Flying": {}
	}
};
