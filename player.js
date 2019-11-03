'use strict';

class Player extends Entity {
  constructor(args) {
    super(args);
    this._visibleTiles = {};
  }

  act() {
    this.getMap().getEngine().lock();
    this.computeFOV();
    Lootr.refreshScreens();
    Lootr.UI.renderPlayerStats(this);
  }

  computeFOV() {
    const map = this.getMap();
    this._visibleTiles = {};
    const fov = new ROT.FOV.PreciseShadowcasting((x, y) => !map.isTileOpaque(x, y)); //TODO determine correct visibility distance value. make configureable?

    fov.compute(...this.getCoordinates(), 10, (x, y, r, visibility) => {
      if (this._visibleTiles[x] === undefined) {
        this._visibleTiles[x] = {};
      }

      if (x < 0 || y < 0) {
        return;
      } else if (x >= map.getWidth() || y >= map.getHeight()) {
        return;
      } else {
        map.getTile(x, y).setExplored();
        this._visibleTiles[x][y] = true;
      }
    });
  }

  canSeeTile(x, y) {
    return this._visibleTiles[x] !== undefined && this._visibleTiles[x][y];
  }

  tryMovingTo(dX, dY) {
    MoveableSystem(this, dX, dY);
  }

}