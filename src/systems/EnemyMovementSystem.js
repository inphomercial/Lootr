'use strict';

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

    return moveTowardsCoords(entity, playerCoords);
}

const EnemyMovementSystem = (entity) => {
    if (!entity.hasComponent('Moveable') || !entity.hasComponent('Enemy')) {
        return;
    }

    if (!moveTowardsPlayer(entity)) {
        console.log(`${entity.getName()} moving randomly`);
        moveRandomly(entity);
    };
}


