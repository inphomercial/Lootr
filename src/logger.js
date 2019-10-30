
let logs = []

function Logger(log) {
	let logDisplay = document.getElementById('logDisplay');
	let logWrapper = `<div class="log-item">${log}</div>`;

	logs.unshift(logWrapper);

	if(logs.length > 10) {
		logs.pop();
	}

	logDisplay.innerHTML = logs.toString();
}

function DebugLogger(msg, value = '', ...args) {
	if (Lootr.isDebug()) {
		console.log(msg, value, ...args);
	}
}

function LoggerPlayer(entity, log) {
	if (!entity.hasComponent('Player')) {
		return;
	}

	let logDisplay = document.getElementById('logDisplay');
	let logWrapper = `<div class="log-item">${log}</div>`;

	logs.unshift(logWrapper);

	if(logs.length > 10) {
		logs.pop();
	}

	logDisplay.innerHTML = logs.toString();
}