
function MoveableSystem(entity, dX, dY) {
	let newX = entity.getX() + dX;
	let newY = entity.getY() + dY;
	let map = entity.getMap();

	console.log('entity', entity);

	if (!entity.hasComponent('Moveable')) {
		console.log(`${entity.getName()} is unable to move`);
		return
	}

	if (map.isTileOccupied(newX, newY)) {
		let occupiedBy = map.getEntityAt(newX, newY);
		console.log(`${entity.getName()} tries to move into ${newX}, ${newY} but there is a ${occupiedBy.getName()} there.`);

		BattleSystem(entity, occupiedBy);

		return;
	}

	if (map.isTileSolid(newX, newY) && !entity.hasComponent('PassThroughSolids')) {
		console.log(`tile is solid and ${entity.getName()} cannot pass thru walls`);

		return;
	}

	entity.setX(newX);
	entity.setY(newY);
}
