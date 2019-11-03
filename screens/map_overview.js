'use strict';

const drawCursor = (display, x, y) => {
  const startingCoords = Lootr.getPlayer().getMap().getStartingCoordinates(x, y);
  const newX = x - startingCoords[0];
  const newY = y - startingCoords[1];
  const tile = Lootr.getPlayer().getMap().getTile(x, y);
  let entity = Lootr.getPlayer().getMap().getEntityAt(x, y);

  if (_.isEmpty(entity)) {
    entity = Lootr.getPlayer().getMap().getTopMostItemAt(x, y);
  }

  if (_.isEmpty(entity)) {
    entity = tile;
  }

  if (!_.isEmpty(entity)) {
    let char = '';

    if (tile.getIsExplored()) {
      char = entity.getChar();
    }

    display.draw(newX, newY, char, 'black', 'white');
  }
};

const restrainCursor = (cursor, map) => {
  cursor[0] = cursor[0] < 0 ? 0 : cursor[0];
  cursor[1] = cursor[1] < 0 ? 0 : cursor[1];
  cursor[0] = cursor[0] >= map.getWidth() ? map.getWidth() - 1 : cursor[0];
  cursor[1] = cursor[1] >= map.getHeight() ? map.getHeight() - 1 : cursor[1];
  return cursor;
};

Lootr.Screens.MapOverview = {
  _caption: "Map Overview Screen",
  enter: function enter(gameDisplay) {
    LoggerDebug("Entered Map Overview Screen");
    this._gameDisplay = gameDisplay;
    this._player = Lootr.getPlayer();
    this._cursor = this._player.getCoordinates();
  },
  renderGame: function renderGame() {
    // Draw map first TODO pick override colors
    Lootr.getPlayer().getMap().renderMap(this._gameDisplay, this._cursor, 'blue'); // Draw Items

    Lootr.getPlayer().getMap().renderItems(this._gameDisplay, this._cursor); // Draw entities

    Lootr.getPlayer().getMap().renderEntities(this._gameDisplay, this._cursor); // Draw Cursor 

    drawCursor(this._gameDisplay, ...this._cursor);
  },
  exit: function exit() {
    LoggerDebug("Exited Map Overview Screen");
  },

  handleInput(inputType, inputData) {
    LoggerDebug('Map Overview screen input', inputType, inputData);
    let code = inputData.keyCode;

    switch (code) {
      case ROT.KEYS.VK_4:
      case ROT.KEYS.VK_LEFT:
        this._cursor[0] -= 1;
        break;

      case ROT.KEYS.VK_6:
      case ROT.KEYS.VK_RIGHT:
        this._cursor[0] += 1;
        break;

      case ROT.KEYS.VK_8:
      case ROT.KEYS.VK_UP:
        this._cursor[1] -= 1;
        break;

      case ROT.KEYS.VK_2:
      case ROT.KEYS.VK_DOWN:
        this._cursor[1] += 1;
        break;

      case ROT.KEYS.VK_1:
        this._cursor[0] -= 1;
        this._cursor[1] += 1;
        break;

      case ROT.KEYS.VK_3:
        this._cursor[0] += 1;
        this._cursor[1] += 1;
        break;

      case ROT.KEYS.VK_7:
        this._cursor[0] -= 1;
        this._cursor[1] -= 1;
        break;

      case ROT.KEYS.VK_9:
        this._cursor[0] += 1;
        this._cursor[1] -= 1;
        break;

      case ROT.KEYS.VK_ESCAPE:
      case ROT.KEYS.VK_X:
        Lootr.switchScreen(Lootr.Screens.Play);
        break;

      default:
        break;
    }

    this._cursor = restrainCursor(this._cursor, this._player.getMap());
    Lootr.refreshScreens();
  }

};