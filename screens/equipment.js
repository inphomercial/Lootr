'use strict';

Lootr.Screens.Equipment = {
  _caption: "Equipment Screen",
  enter: function enter(gameDisplay) {
    LoggerDebug("Entered Equipment Screen");
    this._gameDisplay = gameDisplay;
  },
  renderGame: function renderGame() {
    let player = Lootr.getPlayer();

    this._gameDisplay.drawText(1, 1, "Equipment Screen");

    let equipment = player.getComponent("Slots").slots;
    let startingPostition = 3;
    Object.keys(equipment).forEach(item => {
      let nameText = equipment[item] == '' ? '' : equipment[item].getName();
      let fullText = "".concat(item, ": ").concat(nameText);

      this._gameDisplay.drawText(1, startingPostition, fullText);

      startingPostition++;
    });
  },
  exit: function exit() {
    LoggerDebug("Exited Equipment Screen");
  },

  handleInput(inputType, inputData) {
    Lootr.switchScreen(Lootr.Screens.Play);
  }

};