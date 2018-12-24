'use strict';

const EnemyMovementSystem = (entity) => {
    if (!entity.hasComponent('Moveable') || !entity.hasComponent('Enemy')) {
        return;
    }
    
    // console.log(`moving towards ${Lootr.getPlayer().getCoordinates()}`);

    MoveableSystem(entity, Math.round((Math.random()*2))-1, Math.round((Math.random()*2))-1);
}