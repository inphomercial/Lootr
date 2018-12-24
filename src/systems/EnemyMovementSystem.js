'use strict';

const EnemyMovementSystem = (entity) => {
    if (!entity.hasComponent('Moveable') || !entity.hasComponent('Enemy')) {
        return;
    }

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
    const dijkstra = new ROT.Path.Dijkstra(...Lootr.getPlayer().getCoordinates(), isPassable);

    const path = [];
    /* compute from given coords #1 */
    dijkstra.compute(...entity.getCoordinates(), function(x, y) {
        path.push([x,y]);
    });
    
    if (path.length) {
        MoveableSystem(entity, ...path.shift());
    } else {
        // no path to player
        MoveableSystem(entity, Math.round((Math.random()*2))-1, Math.round((Math.random()*2))-1);
    }
}
