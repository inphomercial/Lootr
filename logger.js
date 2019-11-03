"use strict";

let logs = [];
/**
 * Logs a message to console if DEBUG is true
 * 
 * @param {string} msg 
 * @param {string|object} value 
 * @param  {...any} args 
 */

function LoggerDebug(msg, value = '', ...args) {
  if (Lootr.isDebug()) {
    console.log(msg, value, ...args);
  }
}
/**
 * Logs a message to console in RED
 * 
 * @param {string} message 
 */


function LoggerError(message) {
  console.log("%c ".concat(message), 'color: red');
}
/**
 * Logs a message to the UI
 * 
 * @param {string} log 
 */


function LoggerPlayer(log) {
  let logDisplay = document.getElementById('logDisplay');
  let logWrapper = "<div class=\"log-item\">".concat(log, "</div>");
  logs.unshift(logWrapper);

  if (logs.length > 10) {
    logs.pop();
  }

  logDisplay.innerHTML = logs.toString();
}