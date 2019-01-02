'use strict';

const targetTileCache = {};

const autoExplore = (entity) => {
    let targetTile = targetTileCache[entity.getUid()];
    if (!targetTile || targetTile.getIsExplored()) {
        targetTile = entity.getMap().getShortestUnexploredPath(...entity.getCoordinates());
        console.log(targetTile);
        if( targetTile ) {
            targetTileCache[entity.getUid()] = targetTile;
        } else {
            LoggerPlayer(entity, 'There are no more unexplored tiles');
        }
    }

    if (targetTile) {
        if (!moveTowardsCoords(entity, targetTile.getCoordinates())) {
            targetTile.setUnreachable();
            targetTileCache[entity.getUid()] = false;
            autoExplore(entity);
        };
    }
}

const AutoExploreSystem = (entity) => {
    if (!entity.hasComponent('Moveable')) {
        return;
    }

    autoExplore(entity);
}