'use strict';

Lootr.Screens.Play = {

	_caption: "Play Screen",

	enter: function( gameDisplay ) {
		LoggerDebug("Entered Play Screen");

		this._gameDisplay = gameDisplay;
	},

	renderGame: function () {
		Lootr.getGameDisplay().clear();

		// Draw map first
		this.map.renderMap( this._gameDisplay, Lootr.getPlayer().getCoordinates() );
		//
		// Draw Items
		this.map.renderItems( this._gameDisplay, Lootr.getPlayer().getCoordinates() );
		//
		// Draw entities
		this.map.renderEntities( this._gameDisplay, Lootr.getPlayer().getCoordinates() );

		// Draw Player Stats
		Lootr.UI.renderPlayerStats(Lootr.getPlayer());
	},

	exit: function() {
		LoggerDebug("Exited Play Screen");
	},

	handleInput: function ( inputType, inputData ) {
		const code = inputData.keyCode;
		const player = Lootr.getPlayer();

		switch(code) {
			case ROT.KEYS.VK_A:
				console.log("ability screen");
				break;

			case ROT.KEYS.VK_H:
				Lootr.switchScreen(new Display(Lootr.Screens.Help));
				return;

			case ROT.KEYS.VK_I:
				Lootr.switchScreen(new Display(Lootr.Screens.Inventory));
				return;
			
			case ROT.KEYS.VK_E:
				Lootr.switchScreen(new Display(Lootr.Screens.Equipment));
				return;
			
			case ROT.KEYS.VK_X:
				Lootr.switchScreen(new Display(Lootr.Screens.MapOverview))
				return;
			
			case ROT.KEYS.VK_PERIOD:
				let map = this.map;
				PickUpItemSystem(map, player);

				break;

			case ROT.KEYS.VK_4:
			case ROT.KEYS.VK_LEFT:
				player.tryMovingTo(-1, 0);
				break;
				
			case ROT.KEYS.VK_5:
			case ROT.KEYS.VK_S:
				break;

			case ROT.KEYS.VK_6:
			case ROT.KEYS.VK_RIGHT:
				player.tryMovingTo(1, 0);
				break;

			case ROT.KEYS.VK_8:
			case ROT.KEYS.VK_UP:
				player.tryMovingTo(0, -1);
				break;

			case ROT.KEYS.VK_2:
			case ROT.KEYS.VK_DOWN:
				player.tryMovingTo(0, 1);
				break;

			case ROT.KEYS.VK_1:
				player.tryMovingTo(-1, 1);
				break;
			
			case ROT.KEYS.VK_3:
				player.tryMovingTo(1, 1);
				break;
			
			case ROT.KEYS.VK_7:
				player.tryMovingTo(-1, -1);
				break;

			case ROT.KEYS.VK_9:
				player.tryMovingTo(1, -1);
				break;
			
			case ROT.KEYS.VK_O:
				AutoExploreSystem(player);
				break;

			case ROT.KEYS.VK_C:
				Lootr.switchScreen(new Display(Lootr.Screens.Stats));
				break;
				
			case ROT.KEYS.VK_T:
				Lootr.switchScreen(new Display(Lootr.Screens.Equipped));
				break;
			
			default:
				LoggerPlayer(`Unkown Command ${code}`);
				return;
		}

		this.map.getEngine().unlock();
	}
}