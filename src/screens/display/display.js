'use strict';

Lootr.Screens.Display = function( template ) {

    console.log('template', template);

    this._caption = "no caption";
    this.enter = null;
    this.renderGame = null;
    this.renderHud = null;
    this.renderLog = null;
    this.exit = null;
    this.handleInput = null;

    // Replace our defaults with template values
    Object.assign(this, template);
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

Lootr.Screens.Display.prototype.renderLog = function () {
    console.log("Display renderLog");
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
