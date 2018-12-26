
Lootr.UI = {}

Lootr.UI.renderPlayerStats = function(player) {
	let display = document.getElementById('hudDisplay');

	console.log(player.getComponent('Health'));

	let statsUi = `
		<div>Player: ${player.getName()}</div>
		<div>Hit Points: ${player.getComponent('Health').hp} / ${player.getComponent('Health').maxHp}</div>
	`;

	display.innerHTML = statsUi;
}