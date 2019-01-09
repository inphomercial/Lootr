'use strict';

const PickUpItemSystem = (map, entity) => {
	let currentX = entity.getX();
	let currentY = entity.getY();
	let item = map.getItemAt(currentX, currentY);

	if (!item) {
		Logger("Nothing to pick up.");
	}

	if (item.getName() == "Gold") {
		if (!entity.hasComponent('GoldHolder')) {
			return;
		}

		entity.getComponent("GoldHolder").gold++;
		map.removeItem(item);

		Logger(`You pick up a ${item.getName()} coin.`);

		return;
	}

	if (!entity.hasComponent('Inventory')) {
        return;
	}

	let currentInventory = entity.getComponent("Inventory").inventory;
	currentInventory.push(item);
	map.removeItem(item);

	Logger(`You pick up a ${item.getName()}`);
}