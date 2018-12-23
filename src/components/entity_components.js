
Lootr.EntityComponents = {};

Lootr.EntityComponents.Moveable = function Moveable() {
	return {
		name: "Moveable" 
	}
	// this.name = "Moveable";

	// return this;
};

Lootr.EntityComponents.PassThroughSolids = function PassThroughSolids() {
	return {
		name: "PassThroughSolids"
	}
	// this.name = "PassThroughSolids";

	// return this;
};

Lootr.EntityComponents.Health = function Health(template) {
	return {
		name: "Health",
		hp: template.hp,
		maxHp: template.hp
	}
	// this.name = "Health";
	// this.hp = value;
	// this.maxHp = value;

	// return this;
}

// Lootr.EntityComponents.PassThroughSolids = ({
// 	name: "PassThroughSolids",
// 	init: function() {
// 		console.log("Pass through walls inits");
// 	},
// 	act: function() {
// 		console.log('passing through solids acting', );
// 	}
// });

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

// Lootr.EntityComponents.Moveable = ({
// 	name: "Moveable",
// 	init: function() {
// 		console.log("Moveable inits");
// 	},
// 	act: function () {}
// });