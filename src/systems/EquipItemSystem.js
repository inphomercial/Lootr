'use strict';

const EquipItemSystem = (entity, item) => {
	if (!entity.hasComponent('Slots')) {
		return;
	}
	
	if (!item.hasComponent('Wieldable')) {
		LoggerPlayer(`You cannot figure out a way to equip the ${ item.getName() }`);
		return;
	}

	let slot = Lootr.ItemSystems.Wieldable.getSlot(item);

	if (entity.getComponent('Slots').slots[slot] !== '') {
		LoggerPlayer(`You already have an item in that slow`);		
	}

	Lootr.EntitySystems.Inventory.removeItem(entity, item);
	Lootr.EntitySystems.Slots.equipItemToSlot(entity, slot, item);

	LoggerPlayer(`You equip the ${ item.getName() }`);
}

const UnequipItemSystem = (entity, item) => {
	if (!entity.hasComponent('Slots')) {
		return;
	}

	if (!entity.hasComponent('Inventory')) {
		return;
	}

	let slot = Lootr.ItemSystems.Wieldable.getSlot(item);

	let itemForInventory = Lootr.EntitySystems.Slots.unequipItemFromSlot(entity, slot);
	Lootr.EntitySystems.Inventory.addItem(entity, itemForInventory);

	LoggerPlayer(`You un-equip the ${ item.getName() }`);
}