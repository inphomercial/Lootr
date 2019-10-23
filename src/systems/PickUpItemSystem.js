'use strict';

const PickUpItemSystem = (map, entity) => {
	let currentX = entity.getX();
	let currentY = entity.getY();
	let item = map.getTopMostItemAt(currentX, currentY);

	if (!item) {
		Logger("Nothing to pick up.");
	}

	if (item.getName() == "Gold") {
		if (!entity.hasComponent('GoldHolder')) {
			Logger("You cannot pick that up");

			return;
		}

		Lootr.ComponentSystems.GoldHolder.addGold(entity, 5);

		map.removeItem(item);

		Logger(`You pick up a ${item.getName()} coin.`);

		return;
	}

	if (!entity.hasComponent('Inventory')) {
		return;
	}

	Lootr.ComponentSystems.Inventory.addItem(entity, item);

	map.removeItem(item);

	Logger(`You pick up a ${item.getName()}`);
}