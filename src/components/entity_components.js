
Lootr.EntityComponents = {};

Lootr.EntityComponents.Moveable = function Moveable() {
	return {
		name: "Moveable" 
	}
};

Lootr.EntityComponents.Player = function Player() {
	return {
		name: "Player" 
	}
};

Lootr.EntityComponents.Actor = function Actor() {
	return {
		name: "Actor" 
	}
};

Lootr.EntityComponents.GoldHolder = function GoldHolder(template) {
	return {
		name: "GoldHolder",
		gold: template.gold
	}
}

Lootr.EntityComponents.Inventory = function Inventory(template) {
	return {
		name: "Inventory",
		inventory: template.inventory
	}
};

Lootr.EntityComponents.Slots = function Slots(template) {
	return {
		name: "Slots",
		slots: template.slots
	}
};

Lootr.EntityComponents.PassThroughSolids = function PassThroughSolids() {
	return {
		name: "PassThroughSolids"
	}
};

Lootr.EntityComponents.Health = function Health(template) {
	return {
		name: "Health",
		hp: template.hp,
		maxHp: template.hp
	}
}

Lootr.EntityComponents.Flying = function Flying(template) {
	return {
		name: "Flying"
	}
}

Lootr.EntityComponents.Enemy = function Enemy(template) {
	return {
		name: "Enemy"
	}
}

Lootr.EntityComponents.Bleedable = function Bleedable(template) {
	return {
		name: "Bleedable",
		bleedColor: template.bleedColor || "red"
	}
}

Lootr.EntityComponents.Corpseable = function Corpseable() {
	return {
		name: "Corpseable"
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
