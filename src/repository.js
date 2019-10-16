// 'use strict';
//
// Lootr.Repository = function ( name, ctor ) {
//     this._name = name;
//     this._templates = {};
//     this._ctor = ctor;
// };
//
// Lootr.Repository.prototype.define = function ( name, template, options ) {
//     this._templates[name] = template;
//
//     // Apply any options
// }
//
// Lootr.Repository.prototype.create = function ( name, args ) {
//     if (_.isEmpty(this._templates[name])) {
//         throw new Error("No template named " + name + " exists in repo");
//     }
//
//     // Copy the template
//     var template = Object.create(this._templates[name]);
//
//     // Apply any args
//     if( args ) {
//         for ( var key in args ) {
//             template[key] = args[key];
//         }
//     }
//
//     // Create the object, passing the template as an argument
//     return new this._ctor(template);
// };

function createItem(template) {
	if (!Lootr.Templates.Items[template.template]) {
		throw new Error(`No Item template exists for ${ template.template }`);
	}

	return new Item(Lootr.Templates.Items[template.template]);
}

function createEntity(template) {
	if (!Lootr.Templates.Entities[template.template]) {
		throw new Error(`No Entity template exists for ${ template.template }`);
	}

	return new Entity(Lootr.Templates.Entities[template.template]);
}

function createTile(template, x, y) {
	if (!Lootr.Templates.Tiles[template.template]) {
		throw new Error(`No Tile template exists for ${ template.template }`);
	}

	return new Tile(Lootr.Templates.Tiles[template.template], x, y);
}