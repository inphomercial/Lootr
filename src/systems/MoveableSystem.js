
function MoveableSystem(entity, dX, dY) {
	let newX = entity.getX() + dX;
	let newY = entity.getY() + dY;
	let map = entity.getMap();

	// if (!this.hasComponent('MoveableComponent')) {
	// 	Lootr.sendMessage(this, "You cannot move");
	// 	return
	// }

	if (map.isTileSolid(newX, newY) && !entity.hasComponent('PassThroughSolids')) {
		console.log('tile is solid and you cannot pass thru walls', );
		return;
	} else {
		console.log('moving', );
	}

	// Lootr.sendMessage(this, "You move");

	entity.setX(newX);
	entity.setY(newY);
}
