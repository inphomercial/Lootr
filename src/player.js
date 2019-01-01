'use strict';

class Player extends Entity {

	constructor(args) {
		super(args);

		this._visibleTiles = {};

		//compute the player's initial line of sight
		this.computeFOV();
	}

	act() {
		this.getMap().getEngine().lock();

		window.addEventListener("keydown", this);
	}

	computeFOV() {
		const map = this.getMap();
		this._visibleTiles = {};

		const fov = new ROT.FOV.PreciseShadowcasting((x,y) => !map.isTileOpaque(x,y));

		//TODO determine correct visibility distance value. make configureable?
		fov.compute(...this.getCoordinates(), 10, (x, y, r, visibility) => {
			if (this._visibleTiles[x] === undefined) {
				this._visibleTiles[x] = {}
			}
			try {
				map.getTile(x, y).setExplored();
			} catch(e){
				console.log("can't get tile");
			} finally {
				this._visibleTiles[x][y] = true;
			}
		});
	}

	canSeeTile(x, y) {
		return this._visibleTiles[x] !== undefined && this._visibleTiles[x][y];
	}

	handleEvent(e) {
		let code = e.keyCode;

		console.log('handleEvent in player', e);

		switch(code) {
			case ROT.KEYS.VK_H:
				Lootr.switchScreen(new Display(Lootr.Screens.Help));
				break;

			case ROT.KEYS.VK_I:
				Lootr.switchScreen(new Display(Lootr.Screens.Inventory));
				break;
			
			case ROT.KEYS.VK_PERIOD:
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

			case ROT.KEYS.VK_4:
			case ROT.KEYS.VK_LEFT:
				this.tryMovingTo(-1, 0);
				break;

			case ROT.KEYS.VK_6:
			case ROT.KEYS.VK_RIGHT:
				this.tryMovingTo(1, 0);
				break;

			case ROT.KEYS.VK_8:
			case ROT.KEYS.VK_UP:
				this.tryMovingTo(0, -1);
				break;

			case ROT.KEYS.VK_2:
			case ROT.KEYS.VK_DOWN:
				this.tryMovingTo(0, 1);
				break;

			case ROT.KEYS.VK_1:
				this.tryMovingTo(-1, 1);
				break;
			
			case ROT.KEYS.VK_3:
				this.tryMovingTo(1, 1);
				break;
			
			case ROT.KEYS.VK_7:
				this.tryMovingTo(-1, -1);
				break;

			case ROT.KEYS.VK_9:
				this.tryMovingTo(1, -1);
				break;
		}

		window.removeEventListener('keydown', this);
		this.computeFOV();
		this.getMap().getEngine().unlock();

		Lootr.refreshScreens();
		
		Lootr.UI.renderPlayerStats(this);
	}

	tryMovingTo(dX, dY) {
		MoveableSystem(this, dX, dY);
	}
}
