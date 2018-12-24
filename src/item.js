'use strict';

class Item extends DynamicGlyph {
	constructor(template) {
		super(template);

		for (const key of Object.keys(template.componentList)) {
			const component = Lootr.ItemComponents[key](template.componentList[key]);
			
			console.log('component', component);

			this.addObjComponent(component);
		}
	}
}
