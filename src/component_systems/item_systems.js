Lootr.ItemSystems = {};

Lootr.ItemSystems.Wieldable = {
	getSlot: (item) => {
		return item.getComponent('Wieldable').slot;
	}
}