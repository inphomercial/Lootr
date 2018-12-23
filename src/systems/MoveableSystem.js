
function MoveableSystem(entity, dX, dY) {
	let newX = entity.getX() + dX;
	let newY = entity.getY() + dY;
	let map = entity.getMap();

	if (!entity.hasComponent('Moveable')) {
		console.log('%o is unable to move', entity);
		// Lootr.sendMessage(this, "You cannot move");
		return
	}

	if (map.isTileSolid(newX, newY) && !entity.hasComponent('PassThroughSolids')) {
		console.log('tile is solid and %o cannot pass thru walls', entity);

		return;
	}

	// Lootr.sendMessage(this, "You move");

	entity.setX(newX);
	entity.setY(newY);
}
