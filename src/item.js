'use strict';

class Item extends DynamicGlyph {
	constructor(template) {
		super(template);

		console.log('template', template);

		// Set Defaults
		this._rarity = template.rarity;
		this._defense = template.defense;

		for(var i = 0; i < template.componentList.length; i++) {
			this.addComponent(Lootr.ItemComponents[template.componentList[i]]);
		}
	}
}
