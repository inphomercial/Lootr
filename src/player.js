'use strict';

class Player extends Entity {

	constructor(args) {
		super(args);
	}

	act() {
		this.getMap().getEngine().lock();

		window.addEventListener("keydown", this);
	}

	handleEvent(e) {
		let code = e.keyCode;

		console.log('handleEvent in player', e);

		switch(code) {
			case ROT.VK_H:
				Lootr.switchScreen(new Display(Lootr.Screens.Help));
				break;

			case ROT.VK_I:
				Lootr.switchScreen(new Display(Lootr.Screens.Inventory));
				break;
			
			case ROT.VK_PERIOD:
				let map = this.getMap();
				let currentX = this.getX();
				let currentY = this.getY();
				let item = map.getItemAt(currentX, currentY);

				if (item) {
					let inven = this.getComponent("Inventory").inventory;
					inven.push(item);
					map.removeItem(item);
					Logger(`You pick up a ${item.getName()}`);
				} else {
					Logger("Nothing to pick up.");
				}

				break;

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
