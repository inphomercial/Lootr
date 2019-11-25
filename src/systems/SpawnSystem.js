'use strict';

const _attemptToSpawn = (entity) => {
	let SpawnSystem = entity.getComponent('EntitySpawner');

	if (Lootr.Utilities.getRandomInt(0, 1000) <= SpawnSystem.spawnChance) {
		if (SpawnSystem.spawnNumber > 0) {
			SpawnSystem.spawnNumber--;

			let map = entity.getMap();
			let currentX = entity.getX();
			let currentY = entity.getY();

			map.addEntityAt(currentX, currentY, createEntity(SpawnSystem.spawns));

		} else {
			entity.setForeground('grey');
		}
	}
}

const SpawnSystem = (entity) => {
	if (!entity.hasComponent('EntitySpawner')) {
		return;
	}

	_attemptToSpawn(entity);
}