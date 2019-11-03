'use strict';

const PickUpItemSystem = (map, entity) => {
	let currentX = entity.getX();
	let currentY = entity.getY();
	let item = map.getTopMostItemAt(currentX, currentY);

	if (!item) {
		LoggerPlayer("Nothing to pick up.");
		return;
	}

	if (item.getName() == "Gold") {
		if (!entity.hasComponent('GoldHolder')) {
			LoggerPlayer("You cannot pick that up");
			return;
		}
		
		const value = Lootr.ItemSystems.Value.getValue(item);
		Lootr.EntitySystems.GoldHolder.addGold(entity, value);

		map.removeItem(item);

		LoggerPlayer(`You pick up ${ value } worth of ${item.getName()} coins.`);

		return;
	}

	if (!entity.hasComponent('Inventory')) {
		return;
	}

	Lootr.EntitySystems.Inventory.addItem(entity, item);

	map.removeItem(item);

	LoggerPlayer(`You pick up a ${item.getName()}`);
}