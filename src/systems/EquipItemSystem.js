'use strict';

const EquipItemSystem = (entity, item) => {
	if (!entity.hasComponent('Slots')) {
		return;
	}
	
	if (!item.hasComponent('Wieldable')) {
		Logger(`You cannot figure out a way to equip the ${ item.getName() }`);
		return;
	}

	let slot = Lootr.ItemSystems.Wieldable.getSlot(item);

	if (entity.getComponent('Slots').slots[slot] !== '') {
		Logger(`You already have an item in that slow`);		
	}

	Lootr.ComponentSystems.Inventory.removeItem(entity, item);
	Lootr.ComponentSystems.Slots.equipItemToSlot(entity, slot, item);

	Logger(`You equip the ${ item.getName() }`);
}

const UnequipItemSystem = (entity, item) => {
	if (!entity.hasComponent('Slots')) {
		return;
	}

	if (!entity.hasComponent('Inventory')) {
		return;
	}

	let slot = Lootr.ItemSystems.Wieldable.getSlot(item);

	let itemForInventory = Lootr.ComponentSystems.Slots.unequipItemFromSlot(entity, slot);
	Lootr.ComponentSystems.Inventory.addItem(entity, itemForInventory);

	Logger(`You un-equip the ${ item.getName() }`);
}