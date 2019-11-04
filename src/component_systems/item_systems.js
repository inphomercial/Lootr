Lootr.ItemSystems = {};

Lootr.ItemSystems.Wieldable = {
	getSlot: (item) => {
		return item.getComponent('Wieldable').slot;
	}
}

Lootr.ItemSystems.Damage = {
	getRollDamage: (item) => {
		let die = item.getComponent('Damage').die;

		return Lootr.Utilities.rollD(die);
	},

	getDamageType: (item) => {
		return item.getComponent('Damage').type;
	}
}

Lootr.ItemSystems.Value = {
	getValue: (item) => {
		if (item.hasComponent('Value')) {
			return item.getComponent('Value').value;
		}
	}
}

Lootr.ItemSystems.Edible = {
	getBites: (item) => {
		return item.getComponent('Edible').bites;
	},

	hasBites: (item) => {
		let bites = item.getComponent('Edible').bites;

		return bites > 0;
	},

	getFoodValue: (item) => {
		return item.getComponent('Edible').foodValue;
	}
}