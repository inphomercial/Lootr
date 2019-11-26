'use strict';

class Spell extends DynamicGlyph {
	constructor(template) {
		super(template);

		this._name = template.name || 'unknown spell';
		this._description = template.description || 'no desc';
		
		this._cast = template.cast;
	}

	castSpell(source, target) {
		this._cast(source, target);
	}
}
