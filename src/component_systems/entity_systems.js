Lootr.EntitySystems = {}; //

Lootr.EntitySystems.Stats = {
	getAttack: (entity) => {
		return entity.getComponent('Stats').attack;
	},

	getDefense: (entity) => {
		return entity.getComponent('Stats').defense;
	},

	getStr: (entity) => {
		return entity.getComponent('Stats').str;
	},

	getDex: (entity) => {
		return entity.getComponent('Stats').dex;
	},

	getWis: (entity) => {
		return entity.getComponent('Stats').wis;
	},

	getModiferScore: (stat) => {
		switch (stat) {
			case 1:
				return -5;				
			case 2:
			case 3:
				return -4;				
			case 4:
			case 5:
				return -3;				
			case 6:
			case 7:
				return -2;				
			case 8:
			case 9:
				return -1;				
			case 10:
			case 11:
				return 0;				
			case 12:
			case 13:
				return 1;				
			case 14:
			case 15:
				return 2;				
			case 16:
			case 17:
				return 3;			
			case 18:
			case 19:
				return 4;				
			case 20:
			case 21:
				return 5;				
			case 22:
			case 23:
				return 6;				
			case 24:
			case 25:
				return 7;				
			case 26:
			case 27:
				return 8;				
			case 28:
			case 29:
				return 9;				
			case 30:
				return 10;				
			default:
				break;
		}
	}
};

Lootr.EntitySystems.GoldHolder = {
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

Lootr.EntitySystems.Inventory = {
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

Lootr.EntitySystems.ArmorClass = {
	getArmorClass: (entity) => {
		return entity.getComponent('ArmorClass').armorClass;
	},

	increaseArmorClass: (entity, amount) => {
		let currentAc = entity.getComponent('ArmorClass').getArmorClass();
		let newTotal = currentAc + amount;

		entity.getComponent('ArmorClass').armorClass = newTotal;
	},

	decreaseArmorClass: (entity, amount) => {
		let currentAc = entity.getComponent('ArmorClass').getArmorClass();
		let newTotal = currentAc - amount;

		entity.getComponent('ArmorClass').armorClass = newTotal;
	}
}

Lootr.EntitySystems.Health = {
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

Lootr.EntitySystems.Slots = {
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