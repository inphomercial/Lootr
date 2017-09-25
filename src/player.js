'use strict';

Lootr.Player = function ( args ) {

    // Player extends Entity setting all its attributes
    Lootr.Entity.call(this, args);

    // Set Defaults
    this._name = "inphomercial";
    this._char = "@";
    this._foreground = "red";

    // Player specific attribs here
    // Replace our defaults with template values
    Object.assign(this, args);
}
// Make Player inherit all methods from Entity
Lootr.Player.extend(Lootr.Entity);
