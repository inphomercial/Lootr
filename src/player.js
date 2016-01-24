'use strict';

Lootr.Player = function ( args ) {

    // Player extends Entity getting all its attributes
    Lootr.Entity.call(this, args);

    // Player specific attribs here
}

// Make Player inherit all methods from Entity
Lootr.Player.extend(Lootr.Entity);
