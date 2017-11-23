'use strict';

Lootr.Entities = {};

Lootr.Entities.Player = () => ({
    _name: "Player",
    _char: "@",
    _foreground: "red",
	_components: [
		Lootr.EntityComponents.PassThroughSolids,
		Lootr.EntityComponents.MessageReceiver,
		Lootr.EntityComponents.Moveable
	]
});

Lootr.Entities.Goblin = () => ({
    _name: "Goblin",
    _char: "g",
	_foreground: "green",
	_components: [Lootr.EntityComponents.PassThroughSolids]
});
