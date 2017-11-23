
Lootr.EntityComponents = {};

Lootr.EntityComponents.PassThroughSolids = ({
	name: "PassThroughSolids",
	init: function() {
		console.log("Pass through walls inits");
	}
});

Lootr.EntityComponents.MessageReceiver = ({
	name: "MessageReceiver",
	init: function() {
		this._messages = [];
	},
	getMessages: function() {
		return this._messages;
	},
	receiveMessage: function(message) {
		this.getMessages().push(message);
	},
	emptyMessages: function() {
		this._messages = [];
	}
});

Lootr.EntityComponents.Moveable = ({
	name: "Moveable",
	init: function() {
		console.log("Moveable inits");
	}
});