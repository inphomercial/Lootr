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

Lootr.ItemSystems.Bonus = {
	getAmount: (item, stat) => {
		let bonusesArray = item.getComponent('Bonus').modifies;
		let filteredByStat = bonusesArray.filter(bonus => bonus.stat === stat);

		// If nothing exists for that stat, skip
		if (!filteredByStat.length) {
			return 0;
		}

		return filteredByStat[0].amount;
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