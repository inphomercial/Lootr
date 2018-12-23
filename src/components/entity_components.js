
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
