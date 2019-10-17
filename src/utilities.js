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