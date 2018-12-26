'use strict';

const aStarCache = {};

const moveRandomly = (entity) => {
    MoveableSystem(entity, Math.round((Math.random()*2))-1, Math.round((Math.random()*2))-1);
}

const EnemyMovementSystem = (entity) => {
    if (!entity.hasComponent('Moveable') || !entity.hasComponent('Enemy')) {
        return;
    }

    const playerCoords = Lootr.getPlayer().getCoordinates();
    const entityCoords = entity.getCoordinates();

    const distance = Math.abs(playerCoords[0] - entityCoords[0]) + Math.abs(playerCoords[1] - entityCoords[1]); 

    //TODO figure out correct distance value
    if (distance > 6) moveRandomly(entity);

    const map = entity.getMap();

    /* input callback informs about map structure */
    const isPassable = function(x, y) {
        if (x < 0 || y < 0) {
            return false;
        } else if (x >= map.getWidth() || y >= map.getHeight()) {
            return false;
        }
        return !map.isTileSolid(x, y) || entity.hasComponent('PassThroughSolids')
    }

    /* prepare path to given coords */
    let aStar;
    if (playerCoords in aStarCache) {
        aStar = aStarCache[playerCoords];
        console.log('got cached aStar');
    } else {
        aStar = new ROT.Path.AStar(...playerCoords, isPassable);
        aStarCache[playerCoords] = aStar;
    }

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
        // no path to player
        moveRandomly(entity);
    }
}


