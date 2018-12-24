
Lootr.EntityComponents = {};

Lootr.EntityComponents.Moveable = function Moveable() {
	return {
		name: "Moveable" 
	}
};

Lootr.EntityComponents.PassThroughSolids = function PassThroughSolids() {
	return {
		name: "PassThroughSolids"
	}
};

Lootr.EntityComponents.Health = function Health(template) {
	return {
		name: "Health",
		hp: template.hp,
		maxHp: template.hp
	}
}

Lootr.EntityComponents.Flying = function Flying(template) {
	return {
		name: "Flying"
	}
}

Lootr.EntityComponents.Enemy = function Enemy(template) {
	return {
		name: "Enemy"
	}
}

Lootr.EntityComponents.Bleedable = function Bleedable(template) {
	return {
		name: "Bleedable",
		bleedColor: template.bleedColor || "red"
	}
}

// Lootr.EntityComponents.MessageReceiver = ({
// 	name: "MessageReceiver",
// 	init: function() {
// 		this._messages = [];
// 	},
// 	act: function () {},
// 	getMessages: function() {
// 		return this._messages;
// 	},
// 	receiveMessage: function(message) {
// 		this.getMessages().push(message);
// 	},
// 	emptyMessages: function() {
// 		this._messages = [];
// 	}
// });
