'use strict';

Lootr.Templates.Tiles.FloorTile = {
	template: 'FloorTile',
    _char: ".",
    _foreground: "salmon",
    _isSolid: false
}

Lootr.Templates.Tiles.WallTile = {
	template: 'WallTile',
    _char: "#",
    _foreground: "orange",
    _isSolid: true,
    _isOpaque: true
}

Lootr.Templates.Tiles.RubyTile = {
	template: 'RubyTile',
    _char: "*",
    _foreground: "red",
    _isSolid: false
}

Lootr.Templates.Tiles.GoldTile = {
	template: 'GoldTile',
    _char: "*",
    _foreground: "gold",
    _isSolid: false
}

Lootr.Templates.Tiles.WaterDeepTile = {
	template: 'WaterDeepTile',
    _char: "~",
    _foreground: "blue",
    _isSolid: true
}

Lootr.Templates.Tiles.WaterShallowTile = {
	template: 'WaterShallowTile',
    _char: "~",
    _foreground: "lightblue",
    _isSolid: false
}

Lootr.Templates.Tiles.LavaTile = {
	template: "LavaTile",
	_char: "~",
	_foreground: "orange",
	// _foreground: ["red", "orange", "yellow"],
	_isSolid: false
}
