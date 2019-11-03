"use strict";

Lootr.UI = {};

Lootr.UI.renderPlayerStats = function (player) {
  LoggerDebug('player', player);
  let display = document.getElementById('hudDisplay');
  let statsUi = "\n\t\t<div>Player: ".concat(player.getName(), "</div>\n\t\t<div>Race: ").concat(player.getComponent('Race').race, "</div>\n\t\t<div>Hit Points: ").concat(player.getComponent('Health').hp, " / ").concat(player.getComponent('Health').maxHp, "</div>\n\t\t<div>Gold: ").concat(player.getComponent('GoldHolder').gold, "</div>\n\t\t<div>Speed: ").concat(player._speed, "</div>\n\t");
  display.innerHTML = statsUi;
};