
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

Lootr.EntityComponents.GoldHolder = (template) => {
	return {
		name: "GoldHolder",
		gold: template.gold,
		addGold: (entity, amount) => {
			entity.getComponent('GoldHolder').gold += amount;
		}
	}
};

Lootr.EntityComponents.Inventory = (template) => {
	return {
		name: "Inventory",
		inventory: template.inventory,
		addItem: (entity, item) => {
			let currentInventory = entity.getComponent("Inventory").inventory;

			currentInventory.push(item);
		
			entity.getComponent('Inventory').inventory = currentInventory;
		},
		removeItem: (entity, item) => {
			let currentInventory = entity.getComponent('Inventory').inventory;

			const remainingItems = currentInventory.filter((equipItem) => {
				return equipItem.getUid() !== item.getUid();
			})
		
			entity.getComponent('Inventory').inventory = remainingItems;
		}
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
		hp: template.hp,
		maxHp: template.hp
	}
}

Lootr.EntityComponents.Flying = (template) => {
	return {
		name: "Flying"
	}
}

Lootr.EntityComponents.Enemy = (template) => {
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
