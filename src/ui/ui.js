
Lootr.UI = {}

Lootr.UI.renderPlayerStats = function(player) {
	let display = document.getElementById('hudDisplay');

	let statsUi = `
		<div>Player: ${player.getName()}</div>
		<div>Hit Points: ${player.getComponent('Health').hp} / ${player.getComponent('Health').maxHp}</div>
		<div>Gold: ${player.getComponent('GoldHolder').gold}</div>
	`;

	display.innerHTML = statsUi;
}