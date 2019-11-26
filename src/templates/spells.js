'use strict';

Lootr.Templates.Spells.Fire = {
	template: 'Fire',
	name: "Fire",
	char: ".",
	foreground: "red",
	isSolid: false,
	onCastText: "You cast a fire ball",
	onFailCastText: "You fail to cast a fire ball",
	cast(source, target) {
		console.log(`Casting fire from ${source} to ${target}`, source, target);
	}
}

