'use strict';

const moveRandomly = (entity) => {
    MoveableSystem(entity, Math.round((Math.random()*2))-1, Math.round((Math.random()*2))-1);
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
        MoveableSystem(entity, x, y);
    } else {
        // no path to coords
        moveRandomly(entity);
    }
}

const moveTowardsPlayer = (entity) => {
    const playerCoords = Lootr.getPlayer().getCoordinates();
    const lastKnownPlayerCoords = entity.getLastKnownPlayerCoords();
    const entityCoords = entity.getCoordinates();

    if (!Lootr.getPlayer().canSeeTile(...entityCoords)) {
        if (lastKnownPlayerCoords.length === 2 && entityCoords !== lastKnownPlayerCoords) {
            return moveTowardsCoords(entity, lastKnownPlayerCoords);
        }
        entity.forgetLastKnownPlayerCoords();
        return moveRandomly(entity);
    }

    //enemy can see player, remember these coordinates
    entity.setLastKnownPlayerCoords(...playerCoords);

    moveTowardsCoords(entity, playerCoords);
}

const EnemyMovementSystem = (entity) => {
    if (!entity.hasComponent('Moveable') || !entity.hasComponent('Enemy')) {
        return;
    }

    moveTowardsPlayer(entity);
}


