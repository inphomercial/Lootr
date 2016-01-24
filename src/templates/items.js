'use strict';

Lootr.ItemsRepository = {};

// Create our central Items repository
Lootr.ItemsRepository = new Lootr.Repository('items', Lootr.Item);

Lootr.ItemsRepository.define('WoodenSword', {
    char: "!",
    foreground: "brown"
});
