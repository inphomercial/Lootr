'use strict';

const GetTotalStatsSystem = (entity, stat) => {

	if (!entity) {
		LoggerError('GetTotalStatsSystem requires an entity');
		return;
	}

	if (!stat) {
		LoggerError("GetTotalStatsSystem requires a stat string ('Wis', 'Dex', 'Str'");
		return;
    }
    
    if (!entity.hasComponent('Slots')) {
        LoggerError("GetTotalStatsSystem requires an entity with Slots");
		return;
    }
    
    if (!entity.hasComponent('Stats')) {
        LoggerError("GetTotalStatsSystem requires an entity with Stats");
		return;
	}

    let statString = `get${ stat }`;
    let baseStat = Lootr.EntitySystems.Stats[statString](entity);    

    let bonusStats = {
        Str: 0,
        Dex: 0,
        Wis: 0,
        Hp: 0
    }
    
    // Loop over all slots
    for (const prop in SLOTS) {
        // Get item from each slot
        let item = Lootr.EntitySystems.Slots.getItemFromSlot(entity, SLOTS[prop]);

        // If no item, or item doesnt have the Bonus component, skip it
        if (!item || !item.hasComponent('Bonus')) {            
            continue;
        }

        // get the bonus amount for the stat on the item
        let amount = Lootr.ItemSystems.Bonus.getAmount(item, stat);

        // Add bonus amount to each stat that has any
        // bonusStats[stat] += filteredByStat[0].amount;
        bonusStats[stat] += amount; 
    }

    // Add our base stat to our bonus stat
    const totalStat = baseStat + bonusStats[stat];

    console.log('baseStat', baseStat);
    console.log('bonusStat', bonusStats[stat]);
    console.log('totalStat', totalStat);

    return totalStat;
}