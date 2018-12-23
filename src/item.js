'use strict';

class Item extends DynamicGlyph {
	constructor(template) {
		super(template);

		console.log('template', template);

		// Set Defaults
		this._rarity = template.rarity;

		for (const key of Object.keys(template.componentList)) {
			const component = Lootr.ItemComponents[key](template.componentList[key]);

			this.addObjComponent(component);
		}
	}
}
