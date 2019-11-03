'use strict';

const PickUpItemSystem = (map, entity) => {
	let currentX = entity.getX();
	let currentY = entity.getY();
	let item = map.getTopMostItemAt(currentX, currentY);

	if (!item) {
		LoggerPlayer("Nothing to pick up.");
	}

	if (item.getName() == "Gold") {
		if (!entity.hasComponent('GoldHolder')) {
			LoggerPlayer("You cannot pick that up");

			return;
		}

		Lootr.EntitySystems.GoldHolder.addGold(entity, 5);

		map.removeItem(item);

		LoggerPlayer(`You pick up a ${item.getName()} coin.`);

		return;
	}

	if (!entity.hasComponent('Inventory')) {
		return;
	}

	Lootr.EntitySystems.Inventory.addItem(entity, item);

	map.removeItem(item);

	LoggerPlayer(`You pick up a ${item.getName()}`);
}