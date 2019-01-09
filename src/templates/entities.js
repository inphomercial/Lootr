'use strict';

Lootr.Templates.Entities.Player = {
    name: "Hulk",
    char: "@",
	foreground: "red",
	speed: 2,
	isPlayer: true,
	componentList: {
		"Player": {},
		"Actor": {},
		"Health": {
			hp: 50
		},
		"Moveable": {},
		"Bleedable": {
			bleedColor: "red"
		},
		"Inventory": {
			inventory: [] // let's pre populate this
		},
		"GoldHolder": {
			gold: 45
		},
		"Slots": {
			slots: {
				head: '',
				hand: '',
				body: ''
			} // let's pre populate this
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

Lootr.Templates.Entities.Rat = {
	name: "Rat",
	char: "r",
	foreground: "brown",
	speed: 3,
	componentList: {
		"Actor": {},
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 2
		},
		"Bleedable": {
			bleedColor: "red"
		},
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
