'use strict';

Lootr.Screens.EquippedDetail = {
  _caption: "Equipped Detail Screen",
  enter: function enter(gameDisplay, args) {
    LoggerDebug("Entered Equipped Detail Screen");
    this._gameDisplay = gameDisplay;
    this._item = args.selectedItem;
    this._entity = args.entity;
  },
  renderGame: function renderGame() {
    this._gameDisplay.drawText(1, 1, "Equipped Detail Screen");

    this._gameDisplay.drawText(1, 3, this._item.getName());

    this._gameDisplay.drawText(1, 5, this._item.getDescription());

    this._gameDisplay.drawText(1, 9, 'Press u to un-equip item');
  },
  exit: function exit() {
    LoggerDebug("Exited Equipped Detail Screen");
  },

  handleInput(inputType, inputData) {
    switch (inputData.keyCode) {
      case ROT.KEYS.VK_ESCAPE:
        Lootr.switchScreen(Lootr.Screens.Equipped);
        break;

      case ROT.KEYS.VK_U:
        UnequipItemSystem(this._entity, this._item);
        Lootr.switchScreen(Lootr.Screens.Equipped);
        break;

      default:
        break;
    }
  }

};