
Lootr.EntityComponents = {};

Lootr.EntityComponents.Moveable = () => {
	return {
		name: "Moveable" 
	}
};

Lootr.EntityComponents.Player = () => {
	return {
		name: "Player" 
	}
};

Lootr.EntityComponents.Actor = () => {
	return {
		name: "Actor" 
	}
};

Lootr.EntityComponents.Stats = (template) => {
	return {
		name: "Stats",
		attack: template.attack || 1,
		defense: template.defense || 1,
		str: template.str || 10,
		dex: template.dex || 10,
		wis: template.wis || 10
	}
}

Lootr.EntityComponents.Race = (template) => {
	return {
		name: "Race",
		race: template.race || 'unknown race'
	}
}

/*
	name (string)
	gold (int)
	randomize (bool)
	dropChance (int) 0-100 lower the number the easier to hit
*/
Lootr.EntityComponents.GoldHolder = (template) => {		
	let amountToGive = template.randomize ? Lootr.Utilities.getRandomInt(0, template.gold) : template.gold;	

	return {
		name: "GoldHolder",
		gold: amountToGive
	}
};

Lootr.EntityComponents.Inventory = (template) => {
	return {
		name: "Inventory",
		inventory: template.inventory || []
	}
};

Lootr.EntityComponents.Slots = (template) => {
	return {
		name: "Slots",
		slots: template.slots
	}
};

Lootr.EntityComponents.PassThroughSolids = () => {
	return {
		name: "PassThroughSolids"
	}
};

Lootr.EntityComponents.Health = (template) => {
	return {
		name: "Health",
		hp: template.hp || 5,
		maxHp: template.hp || 5
	}
}

Lootr.EntityComponents.Flying = () => {
	return {
		name: "Flying"
	}
}

Lootr.EntityComponents.Enemy = () => {
	return {
		name: "Enemy"
	}
}

Lootr.EntityComponents.Bleedable = (template) => {
	return {
		name: "Bleedable",
		bleedColor: template.bleedColor || "red"
	}
}

Lootr.EntityComponents.Corpseable = () => {
	return {
		name: "Corpseable"
	}
}

Lootr.EntityComponents.Burnable = () => {
	return {
		name: "Burnable",
		setOnFire(entity, color) {
			entity.addForegroundColor(color);
		}
	}
}

// Can be used to give an entity the ability to spawn additional entities
// based on `spawnChance` and with a number of spawns before it stops
Lootr.EntityComponents.EntitySpawner = (template) => {
	return {
		name: "EntitySpawner",
		spawns: template.spawns || null,
		spawnChance: template.spawnChance, //a number between 0-1000
		spawnNumber: template.spawnNumber
	}
}

// Lootr.EntityComponents.MessageReceiver = ({
// 	name: "MessageReceiver",
// 	init: function() {
// 		this._messages = [];
// 	},
// 	act: function () {},
// 	getMessages: function() {
// 		return this._messages;
// 	},
// 	receiveMessage: function(message) {
// 		this.getMessages().push(message);
// 	},
// 	emptyMessages: function() {
// 		this._messages = [];
// 	}
// });
