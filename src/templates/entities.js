'use strict';

Lootr.Templates.Entities.Player = {
    name: "Player",
    char: "@",
	foreground: "red",
	componentList: {
		"Health": {
			hp: 100
		},
		"Moveable": {},
		"PassThroughSolids": {}
	}
};

Lootr.Templates.Entities.Goblin = {
    name: "Goblin",
    char: "g",
	foreground: "green",
	componentList: {
		"Moveable": {}
	}
};
