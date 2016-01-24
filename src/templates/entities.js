'use strict';

Lootr.EntitiesRepository = {};

// Create our central Entities repository
Lootr.EntitiesRepository = new Lootr.Repository('entities', Lootr.Entity);

Lootr.EntitiesRepository.define('Goblin', {
    char: "g",
    foreground: "green"
});
