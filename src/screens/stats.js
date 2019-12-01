'use strict';

Lootr.Screens.Stats = {
	_caption: "Stats Screen",

	enter: function( gameDisplay ) {
		LoggerDebug("Stats Equipment Screen");
		
		this._gameDisplay = gameDisplay;
	},

	renderGame: function () {
        const { Stats, ArmorClass, Health, GoldHolder } = Lootr.EntitySystems;

        let player = Lootr.getPlayer();

        this._gameDisplay.drawText(1, 1, "Stats Screen");
        
        this._gameDisplay.drawText(1, 3, `Name: ${ player.getName() }`);
        this._gameDisplay.drawText(1, 4, `Hp: ${ Health.getHp(player) } / ${ Health.getMaxHp(player) + displayStat(player, 'Hp') }`);
        this._gameDisplay.drawText(1, 5, `Gold: ${ GoldHolder.getGold(player) }`);

        this._gameDisplay.drawText(1, 7, `STR: ${ Stats.getStr(player) } ${ displayStat(player, 'Str') }`);
        this._gameDisplay.drawText(1, 8, `DEX: ${ Stats.getDex(player) } ${ displayStat(player, 'Dex') }`);
        this._gameDisplay.drawText(1, 9, `WIS: ${ Stats.getWis(player) } ${ displayStat(player, 'Wis') }`);

        this._gameDisplay.drawText(1, 11, `AC: ${ ArmorClass.getArmorClass(player) }`);
	},

	exit: function() {
		LoggerDebug("Exited Stats Screen");
	},

	handleInput( inputType, inputData ) {
		Lootr.switchScreen(Lootr.Screens.Play);
	}
}

function displayStat(player, stat) {    
    let bonusStat = GetTotalBonusStatSystem(player, stat);

    return bonusStat >= 0 ? `+${bonusStat}` : `${bonusStat}`;
}