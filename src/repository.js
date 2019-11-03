'use strict';

function createItem(template) {
	if (!Lootr.Templates.Items[template.template]) {
		LoggerError(`No Item template exists for ${ template.template }`);		
	}

	return new Item(Lootr.Templates.Items[template.template]);
}

function createEntity(template) {
	if (!Lootr.Templates.Entities[template.template]) {
		LoggerError(`No Entity template exists for ${ template.template }`);
	}

	return new Entity(Lootr.Templates.Entities[template.template]);
}

function createTile(template, x, y) {
	if (!Lootr.Templates.Tiles[template.template]) {
		LoggerError(`No Tile template exists for ${ template.template }`);
	}

	return new Tile(Lootr.Templates.Tiles[template.template], x, y);
}