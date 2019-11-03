'use strict';

const DropItemSystem = (entity, item) => {

	if (!entity) {
		LoggerError('DropItemSystem requires an entity');
		return;
	}

	if (!item) {
		LoggerError("DropItemSystem requires an item");
		return;
	}

	if (!entity.hasComponent('Inventory')) {
		LoggerError("DropItemSystem entity requires Inventory component")
		return;
	}

	// Remove item from entity	
	Lootr.EntitySystems.Inventory.removeItem(entity, item);

	// Add item to map at current location
	let map = entity.getMap();
	map.addItemAt(entity.getX(), entity.getY(), item);
	
	LoggerPlayer(`You drop a a ${item.getName()} on the floor.`);
}