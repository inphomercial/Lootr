Lootr.ComponentSystems = {}; //

Lootr.ComponentSystems.Stats = {
	getAttack: (entity) => {
		return entity.getComponent('Stats').attack;
	},

	getDefense: (entity) => {
		return entity.getComponent('Stats').defense;
	}
};

Lootr.ComponentSystems.GoldHolder = {
	addGold: (entity, amount) => {
		entity.getComponent('GoldHolder').gold += amount;
	},

	removeGold: (entity, amount) => {
		entity.getComponent('GoldHolder').gold -= amount;
	},

	getGold: (entity) => {
		return entity.getComponent('GoldHolder').gold;
	}
}

Lootr.ComponentSystems.Inventory = {
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

Lootr.ComponentSystems.Health = {
	getHp: (entity) => {
		return entity.getComponent('Health').hp;
	},

	getMaxHp: (entity) => {
		return entity.getComponent('Health').maxHp;
	},

	removeHealth: (entity, amount) => {
		entity.getComponent('Health').hp -= amount;
	},

	addHealth: (entity, amount) => {
		let currentHp = entity.getComponent('Health').getHp();
		let max = entity.getComponent('Health').getMaxHp();
		let newTotal = currentHp + amount;

		if (newTotal > max) {
			newTotal = max;
		}

		entity.getComponent('Health').hp = newTotal;
	}
}

Lootr.ComponentSystems.Slots = {
	unequipItemFromSlot: (entity, slot) => {
		// get item
		let item = entity.getComponent('Slots').slots[slot];

		// clear slot
		entity.getComponent('Slots').slots[slot] = '';

		return item;
	},

	isSlotEmpty: (entity, slot) => {
		return entity.getComponent('Slots').slots[slot] === '';
	},

	getItemFromSlot: (entity, slot) => {
		return entity.getComponent('Slots').slots[slot];
	},

	equipItemToSlot: (entity, slot, item) => {
		entity.getComponent('Slots').slots[slot] = item;
	}
}