'use strict';

class Player extends Entity {

	constructor(args) {
		super(args);

    	Object.assign(this, args);
	}

	act() {
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
		
		Lootr.UI.renderPlayerStats(this);
	}

	tryMovingTo(dX, dY) {
		MoveableSystem(this, dX, dY);
	}
}
