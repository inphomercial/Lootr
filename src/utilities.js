'use strict';

Lootr.Utilities = {};

Lootr.Utilities.generateUUID = function() {
    return (((1+Math.random())*0x10000)|0).toString(6).substring(1);
}
