'use strict';

function MoveableSystem(entity, dX, dY) {
	if (dX === 0 && dY === 0) {
		return;
	}

	let newX = entity.getX() + dX;
	let newY = entity.getY() + dY;
	let map = entity.getMap();

	if (!entity.hasComponent('Moveable') && entity.hasComponent('Player')) {
		Logger(`${entity.getName()} is unable to move`);
		return
	}

	if (newX < 0 || newY < 0 || newX >= map.getWidth() || newY >= map.getHeight()) {
		Logger(`${entity.getName()} cannot move off the map`);
		return
	}

	if (map.isTileOccupied(newX, newY)) {
		let occupiedBy = map.getEntityAt(newX, newY);

		if (entity.hasComponent('Player')) {
			Logger(`${entity.getName()} tries to move into ${newX}, ${newY} but there is a ${occupiedBy.getName()} there.`);
		}

		//TODO Don't make enemies attack eachother when they are in the way.
		BattleSystem(entity, occupiedBy);

		return;
	}

	if (map.isTileSolid(newX, newY) && !entity.hasComponent('PassThroughSolids') && entity.hasComponent('Player')) {
		Logger(`tile is solid and ${entity.getName()} cannot pass thru walls`);

		return;
	}

	entity.setX(newX);
	entity.setY(newY);
}
