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
	removeHealth: (entity, amount) => {
		entity.getComponent('Health').hp -= amount;
	},

	addHealth: (entity, amount) => {
		let currentHp = entity.getComponent('Health').hp;
		let max = entity.getComponent('Health').maxHp;
		let newTotal = currentHp + amount;

		if (newTotal > max) {
			newTotal = max;
		}

		entity.getComponent('Health').hp = newTotal;
	}
}