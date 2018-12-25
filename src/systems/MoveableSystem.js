'use strict';

function MoveableSystem(entity, dX, dY) {
	if (dX === 0 && dY === 0) {
		return;
	}

	let newX = entity.getX() + dX;
	let newY = entity.getY() + dY;
	let map = entity.getMap();

	if (!entity.hasComponent('Moveable')) {
		Looger(`${entity.getName()} is unable to move`);
		return
	}

	if (map.isTileOccupied(newX, newY)) {
		let occupiedBy = map.getEntityAt(newX, newY);
		Logger(`${entity.getName()} tries to move into ${newX}, ${newY} but there is a ${occupiedBy.getName()} there.`);

		//TODO Don't make enemies attack eachother when they are in the way.
		BattleSystem(entity, occupiedBy);

		return;
	}

	if (map.isTileSolid(newX, newY) && !entity.hasComponent('PassThroughSolids')) {
		Logger(`tile is solid and ${entity.getName()} cannot pass thru walls`);

		return;
	}

	entity.setX(newX);
	entity.setY(newY);
}
