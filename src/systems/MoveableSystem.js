'use strict';

function MoveableSystem(entity, dX, dY) {
	if (dX === 0 && dY === 0) {
		return false;
	}

	let newX = entity.getX() + dX;
	let newY = entity.getY() + dY;
	let map = entity.getMap();

	if (!entity.hasComponent('Moveable')) {
		LoggerPlayer(entity, `${entity.getName()} is unable to move`);
		return false;
	}

	if (newX < 0 || newY < 0 || newX >= map.getWidth() || newY >= map.getHeight()) {
		LoggerPlayer(entity, `${entity.getName()} cannot move off the map`);
		return false;
	}

	if (map.isTileOccupied(newX, newY)) {
		let occupiedBy = map.getEntityAt(newX, newY);

		LoggerPlayer(entity, `${entity.getName()} tries to move into ${newX}, ${newY} but there is a ${occupiedBy.getName()} there.`);

		//TODO Don't make enemies attack eachother when they are in the way.
		BattleSystem(entity, occupiedBy);

		return true;
	}

	if (map.isTileSolid(newX, newY) && !entity.hasComponent('PassThroughSolids')) {
		LoggerPlayer(entity, `tile is solid and ${entity.getName()} cannot pass thru walls`);

		return false;
	}

	entity.setX(newX);
    entity.setY(newY);
    
    return true;
}

const moveRandomly = (entity) => {
    return MoveableSystem(entity, Math.round((Math.random()*2))-1, Math.round((Math.random()*2))-1);
}

const moveTowardsCoords = (entity, coords) => {
    const entityCoords = entity.getCoordinates();
    const map = entity.getMap();

    /* input callback informs about map structure */
    const isPassable = function(x, y) {
        if (x < 0 || y < 0) {
            return false;
        } else if (x >= map.getWidth() || y >= map.getHeight()) {
            return false;
        }
        return entity.hasComponent('PassThroughSolids') || !map.isTileSolid(x, y)
    }

    /* prepare path to given coords */
    //TODO cache computed aStars per entity type?
    const aStar = new ROT.Path.AStar(...coords, isPassable);

    const path = [];
    /* compute from given coords #1 */
    aStar.compute(...entityCoords, function(x, y) {
        path.push([x,y]);
    });
    
    if (path.length > 1) {
        const x = -(entityCoords[0] - path[1][0]);
        const y = -(entityCoords[1] - path[1][1]);
        // console.log(`${entity.getCoordinates()} moving to ${x},${y}`);
        return MoveableSystem(entity, x, y);
    } else {
        // no path to coords
        return false;
    }
}
