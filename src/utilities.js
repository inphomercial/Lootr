'use strict';

Lootr.Utilities = {};

Lootr.Utilities.generateUUID = function() {
	return (((1+Math.random())*0x10000)|0).toString(6).substring(1);
}

// Returns a random item from an array
Lootr.Utilities.getRandomFromArray = (array) => {
	return array[Math.floor(Math.random() * array.length)];
}

// ex: if you want 1 - 100 min = 1, max = 100
Lootr.Utilities.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Enter a 1 - 100
Lootr.Utilities.flipBasedOnChance = (toBeat) => {
	let roll = Lootr.Utilities.getRandomInt(0, 100);	

	return roll > toBeat;
}

Lootr.Utilities.rollD = (maxSides) => {
	return Lootr.Utilities.getRandomInt(1, maxSides);
}

Lootr.Utilities.rollD20 = () => {
	return Lootr.Utilities.getRandomInt(1, 20);
};

Lootr.Utilities.rollD20Advantage = () => {
	const roll1 = Lootr.Utilities.rollD20();    
	const roll2 = Lootr.Utilities.rollD20();

	return Math.max(roll1, roll2);            
}

Lootr.Utilities.rollD20Disadvantage = () => {
	const roll1 = Lootr.Utilities.rollD20();    
	const roll2 = Lootr.Utilities.rollD20();

	return Math.min(roll1, roll2);            
}