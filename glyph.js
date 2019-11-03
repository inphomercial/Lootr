"use strict";

class Glyph {
  constructor(template) {
    // Set our Defaults
    this._char = template.char || "?"; // Sets our foreground regardless of it its a string or array

    this._initForeground(template); // Can be used to change a tile back to what it original was if it changes


    this._originalForeground = this._foreground; // Contains the original template values for foreground (might be an array)

    this._foregroundTemplate = template.foreground;
    this._background = template.background || 'black';
  }

  _initForeground(template) {
    if (Array.isArray(template.foreground)) {
      this._foreground = template.foreground[0];
      return;
    }

    this._foreground = template.foreground || 'yellow';
  }

  _getNextForeground() {
    if (Array.isArray(this._foregroundTemplate)) {
      return Lootr.Utilities.getRandomFromArray(this._foregroundTemplate);
    }

    return this._foreground;
  }

  getChar() {
    return this._char;
  }

  getForeground() {
    if (Lootr.getPlayer().canSeeTile(this.getX(), this.getY())) {
      return this._getNextForeground();
    } else {
      return 'grey';
    }
  }

  getOriginalForeground() {
    return this._originalForeground;
  }

  getBackground() {
    return this._background;
  }

  setForeground(color) {
    this._foreground = color;
  }

  addForegroundColor(color) {
    if (Array.isArray(this._foregroundTemplate)) {
      this._foregroundTemplate.push(color);

      return;
    }

    this._foregroundTemplate = [this._foreground, color];
  }

  setBackground(color) {
    this._background = color;
  }

}

;