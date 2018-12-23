'use strict';

class Player extends Entity {

	constructor(args) {
		super(args);

    	Object.assign(this, args);
	}


	act() {
		console.log("%o is acting", this);

		this.getMap().getEngine().lock();
		window.addEventListener("keydown", this);
	}

	handleEvent(e) {
		let code = e.keyCode;

		switch(code) {
			case ROT.VK_4:
			case ROT.VK_LEFT:
				this.tryMovingTo(-1, 0);
				break;

			case ROT.VK_6:
			case ROT.VK_RIGHT:
				this.tryMovingTo(1, 0);
				break;

			case ROT.VK_8:
			case ROT.VK_UP:
				this.tryMovingTo(0, -1);
				break;

			case ROT.VK_2:
			case ROT.VK_DOWN:
				this.tryMovingTo(0, 1);
				break;

			case ROT.VK_1:
				this.tryMovingTo(-1, 1);
				break;
			
			case ROT.VK_3:
				this.tryMovingTo(1, 1);
				break;
			
			case ROT.VK_7:
				this.tryMovingTo(-1, -1);
				break;

			case ROT.VK_9:
				this.tryMovingTo(1, -1);
				break;
		}

		window.removeEventListener('keydown', this);
		this.getMap().getEngine().unlock();

		Lootr.refreshScreens();
		
		// this.getComponent('MessageReceiver').emptyMessages();
	}

	tryMovingTo(dX, dY) {

		MoveableSystem(this, dX, dY);
		// let newX = this.getX() + dX;
		// let newY = this.getY() + dY;
		// let map = this.getMap();

		// // if (!this.hasComponent('MoveableComponent')) {
		// // 	Lootr.sendMessage(this, "You cannot move");
		// // 	return
		// // }

		// if (map.isTileSolid(newX, newY) && !this.hasComponent('PassThroughSolids')) {
		// 	return;
		// }

		// // Lootr.sendMessage(this, "You move");

		// this.setX(newX);
		// this.setY(newY);

	}

    // Player extends Entity setting all its attributes
    // Lootr.Entity.call(this, args);

    // Replace our defaults with template values
}
// Make Player inherit all methods from Entity
// Lootr.Player.extend(Lootr.Entity);

// Lootr.Player.prototype.act = function() {
// 	console.log("%o is acting", this);

// 	this.getMap().getEngine().lock();
// 	window.addEventListener("keydown", this);
// }

// Lootr.Player.prototype.handleEvent = function(e) {
// 	let code = e.keyCode;

// 	switch(code) {
// 		case ROT.VK_LEFT:
// 			this.tryMovingTo(-1, 0);
// 			break;

// 		case ROT.VK_RIGHT:
// 			this.tryMovingTo(1, 0);
// 			break;

// 		case ROT.VK_UP:
// 			this.tryMovingTo(0, -1);
// 			break;

// 		case ROT.VK_DOWN:
// 			this.tryMovingTo(0, 1);
// 			break;
// 	}

// 	window.removeEventListener('keydown', this);
// 	this.getMap().getEngine().unlock();

// 	Lootr.refreshScreens();
	
// 	this.getComponent('MessageReceiver').emptyMessages();
// }

// Lootr.Player.prototype.tryMovingTo = function(dX, dY) {

// 	let newX = this.getX() + dX;
// 	let newY = this.getY() + dY;
// 	let map = this.getMap();

// 	if (!this.hasComponent('MoveableComponent')) {
// 		Lootr.sendMessage(this, "You cannot move");
// 		return
// 	}

// 	if (map.isTileSolid(newX, newY) && !this.hasComponent('PassThroughSolids')) {
// 		return;
// 	}

// 	Lootr.sendMessage(this, "You move");

// 	this.setX(newX);
// 	this.setY(newY);

// }
