'use strict';

Lootr.Entities = {};

Lootr.Entities.Player = () => ({
    _name: "Player",
    _char: "@",
	_foreground: "red",
	_componentList: ["Moveable", "PassThroughSolids"],
});

Lootr.Entities.Goblin = () => ({
    _name: "Goblin",
    _char: "g",
	_foreground: "green",
	_componentList: ["Moveable"],
	// _components: [Lootr.EntityComponents.PassThroughSolids]
});
