'use strict';

Lootr.Templates.Entities.Player = () => ({
    _name: "Player",
    _char: "@",
	_foreground: "red",
	_componentList: ["Health", "Moveable", "PassThroughSolids"],
});

Lootr.Templates.Entities.Goblin = () => ({
    _name: "Goblin",
    _char: "g",
	_foreground: "green",
	_componentList: ["Moveable"],
});
