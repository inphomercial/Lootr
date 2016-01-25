'use strict';

Lootr.Screens.Display = function( template ) {

    this._caption = template.caption || "default";
    this.enter = template.enter;
    this.renderGame = template.renderGame;
    this.renderHud = template.renderHud;
    this.exit = template.exit;
    this.handleInput = template.handleInput;
}

Lootr.Screens.Display.prototype.setup = function () {
    console.log("Display setup");
}

Lootr.Screens.Display.prototype.enter = function () {
    console.log("Display enter");
}

Lootr.Screens.Display.prototype.renderGame = function () {
    console.log("Display renderGame");
}

Lootr.Screens.Display.prototype.renderHud = function () {
    console.log("Display renderHud");
}

Lootr.Screens.Display.prototype.exit = function () {
    console.log("Display exit");
}

Lootr.Screens.Display.prototype.handleInput = function (inputType, inputDate) {
    console.log("Handling Input");
}
