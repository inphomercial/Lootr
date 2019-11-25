'use strict';

Lootr.Templates.Entities.Player = {
	template: 'Player',
    name: "Hulk",
    char: "@",
	foreground: "red",
	speed: 2,
	isPlayer: true,
	componentList: {
		"Player": {},
		"Actor": {},
		"Health": {
			hp: 100
		},
		"Moveable": {},
		"Bleedable": {
			bleedColor: "red"
		},
		"Inventory": {
			inventory: [] // let's pre populate this
		},
		"GoldHolder": {
			gold: 65
		},
		"Slots": {
			slots: {
				head: '',
				hand_1: '',
				hand_2: '',
				body: '',
				feet: ''
			} 
		},
		"ArmorClass": {
			armorClass: 10
		},
		"Stats": {
			attack: 2,
			defense: 2,
			str: 10,
			dex: 10,
			wis: 10
		},
		"Race": {
			race: 'Human'
		}
	}
};

Lootr.Templates.Entities.Goblin = {
	template: 'Goblin',
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
		"Burnable": {},
		"Corpseable": {},
		"Stats": {
			attack: 1,
			defense: 1
		},
		"ArmorClass": {
			armorClass: 10
		},
		"GoldHolder": {
			gold: 30,
			randomize: true
		}
	}
};

Lootr.Templates.Entities.Slime = {
	template: 'Slime',
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
		},
		"ArmorClass": {
			armorClass: 5
		},
		"Stats": {
			attack: 1,
			defense: 1
		}
	}
}

Lootr.Templates.Entities.Bat = {
	template: 'Bat',
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
		"ArmorClass": {
			armorClass: 12
		},
		"Flying": {},
		"Corpseable": {},
		"Stats": {
			attack: 1,
			defense: 1
		}
	}
}

Lootr.Templates.Entities.Spider = {
	template: 'Spider',
	name: "Spider",
	char: "x",
	foreground: "red",
	background: "black",
	speed: 6,
	componentList: {
		"Actor": {},
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 3
		},
		"ArmorClass": {
			armorClass: 3
		},
		"Stats": {
			attack: 1,
			defense: 1
		}
	}
}

Lootr.Templates.Entities.Skeleton = {
	template: 'Skeleton',
	name: "Skeleton",
	char: "s",
	foreground: "white",
	background: "black",
	speed: 3,
	componentList: {
		"Actor": {},
		"Moveable": {},
		"Enemy": {},
		"Health": {
			hp: 5
		},
		"ArmorClass": {
			armorClass: 2
		},
		"Stats": {
			attack: 3,
			defense: 1
		}
	}
}

Lootr.Templates.Entities.SpiderNest = {
	template: 'SpiderNest',
	name: "Spider Nest",
	char: "&",
	foreground: "white",
	background: "black",
	speed: 1,
	componentList: {
		"Actor": {},
		"Enemy": {},
		"Health": {
			hp: 10
		},
		"EntitySpawner": {
			spawns: Lootr.Templates.Entities.Spider,
			spawnChance: 10,  // 0-1000
			spawnNumber: 5
		},
		"ArmorClass": {
			armorClass: 5
		},
		"Stats": {
			attack: 0,
			defense: 2
		}
	}
}

Lootr.Templates.Entities.Rat = {
	template: 'Rat',
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
		"ArmorClass": {
			armorClass: 5
		},
		"Corpseable": {},
		"Stats": {
			attack: 1,
			defense: 1
		}
	}
}

Lootr.Templates.Entities.Ghost = {
	template: 'Ghost',
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
		"ArmorClass": {
			armorClass: 10
		},
		"PassThroughSolids": {},
		"Flying": {},
		"Stats": {
			attack: 1,
			defense: 1
		}
	}
};
