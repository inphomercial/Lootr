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
