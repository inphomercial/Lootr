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

		let GoldHolderComponent = entity.getComponent('GoldHolder');
		GoldHolderComponent.addGold(entity, 5);

		map.removeItem(item);

		Logger(`You pick up a ${item.getName()} coin.`);

		return;
	}

	if (!entity.hasComponent('Inventory')) {
		return;
	}

	let InventoryComponent = entity.getComponent('Inventory');
	InventoryComponent.addItem(entity, item);

	map.removeItem(item);

	Logger(`You pick up a ${item.getName()}`);
}