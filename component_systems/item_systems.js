"use strict";

Lootr.ItemSystems = {};
Lootr.ItemSystems.Wieldable = {
  getSlot: item => {
    return item.getComponent('Wieldable').slot;
  }
};
Lootr.ItemSystems.Damage = {
  getRollDamage: item => {
    let die = item.getComponent('Damage').die;
    return Lootr.Utilities.rollD(die);
  },
  getDamageType: item => {
    return item.getComponent('Damage').type;
  }
};