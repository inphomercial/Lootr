'use strict';

class Item extends DynamicGlyph {
	constructor(template) {
		super(template);

		this._name = template.name || 'unnamed';

		for (const key of Object.keys(template.componentList)) {
			const component = Lootr.ItemComponents[key](template.componentList[key]);
			
			this.addObjComponent(component);
		}
	}

}
