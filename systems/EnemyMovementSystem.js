'use strict';

const moveTowardsPlayer = entity => {
  const playerCoords = Lootr.getPlayer().getCoordinates();
  const lastKnownPlayerCoords = entity.getLastKnownPlayerCoords();
  const entityCoords = entity.getCoordinates();

  if (!Lootr.getPlayer().canSeeTile(...entityCoords)) {
    if (lastKnownPlayerCoords.length === 2 && entityCoords.toString() !== lastKnownPlayerCoords.toString()) {
      return moveTowardsCoords(entity, lastKnownPlayerCoords);
    } else if (lastKnownPlayerCoords.length === 2) {
      entity.forgetLastKnownPlayerCoords();
    }

    return moveSmartRandomly(entity);
  } //enemy can see player, remember these coordinates


  entity.setLastKnownPlayerCoords(...playerCoords);
  return moveTowardsCoords(entity, playerCoords);
};

const getAdjacentTiles = entity => {
  const [x, y] = entity.getCoordinates();
  const tiles = [];

  for (let xDiff of _.range(-1, 2)) {
    for (let yDiff of _.range(-1, 2)) {
      if (xDiff !== 0 || yDiff !== 0) {
        let newX = parseInt(x) + xDiff;
        let newY = parseInt(y) + yDiff;

        if (newX < 0 || newY < 0) {
          continue;
        } else if (newX >= entity.getMap().getWidth() || newY >= entity.getMap().getHeight()) {
          continue;
        }

        if (!entity.getMap().isTileSolid(newX, newY)) {
          tiles.push([newX, newY]);
        }
      }
    }
  }

  return tiles;
};

const moveSmartRandomly = entity => {
  let adjacentTiles = getAdjacentTiles(entity);

  if (adjacentTiles.length > 1) {
    adjacentTiles = _.filter(adjacentTiles, tileCoords => {
      return tileCoords.toString() !== entity.getPreviousCoords().toString();
    });
  }

  const smartGuess = adjacentTiles[_.random(adjacentTiles.length - 1)];

  return moveTowardsCoords(entity, smartGuess);
};

const EnemyMovementSystem = entity => {
  if (!entity.hasComponent('Moveable') || !entity.hasComponent('Enemy')) {
    return;
  }

  if (!moveTowardsPlayer(entity)) {
    moveRandomly(entity);
  }

  ;
};