'use strict';

const DropItemSystem = (entity, item) => {

	if (!entity) {
		Logger('DropItemSystem requires an entity');
		return;
	}

	if (!item) {
		Logger("DropItemSystem requires an item");
		return;
	}

	if (!entity.hasComponent('Inventory')) {
		Logger("DropItemSystem entity requires Inventory component")
		return;
	}

	// Remove item from entity	
	let Inventory = entity.getComponent('Inventory');
	Inventory.removeItem(entity, item);

	// Add item to map at current location
	let map = entity.getMap();
	map.addItemAt(entity.getX(), entity.getY(), item);
	
	Logger(`You drop a a ${item.getName()} on the floor.`);
}