'use strict';

Lootr.Templates.Tiles.FloorTile = {
  template: 'FloorTile',
  char: ".",
  foreground: "salmon",
  isSolid: false
};
Lootr.Templates.Tiles.WallTile = {
  template: 'WallTile',
  char: "#",
  foreground: "orange",
  isSolid: true,
  isOpaque: true
};
Lootr.Templates.Tiles.RubyTile = {
  template: 'RubyTile',
  char: "*",
  foreground: "red",
  isSolid: false
};
Lootr.Templates.Tiles.GoldTile = {
  template: 'GoldTile',
  char: "*",
  foreground: "gold",
  isSolid: false
};
Lootr.Templates.Tiles.WaterDeepTile = {
  template: 'WaterDeepTile',
  char: "~",
  foreground: "blue",
  isSolid: true
};
Lootr.Templates.Tiles.WaterShallowTile = {
  template: 'WaterShallowTile',
  char: "~",
  foreground: "lightblue",
  isSolid: false
};
Lootr.Templates.Tiles.LavaTile = {
  template: "LavaTile",
  char: "~",
  foreground: ["red", "orange"],
  isSolid: false
};