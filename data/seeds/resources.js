exports.seed = async function(knex) {
    await knex('resources').insert([
        {resources: "bed", description: 'square plushy object used for sleeping in'},
        {resources: "shower", description: 'object for cleaning oneself'},
        {resources: "keys", description: 'object for opening doors or closing'},
        {resources: "door", description: 'object for barring or permitting ones entry'},
        {resources: "car", description: 'object with four wheels that allows for fast travel'},
        {resources: "massage table warmer", description: 'rectangular object for heating bed'},
        {resources: "towels", description: 'rectangular object for heating feet, hands, or face'},
        {resources: "sink", description: 'square object used for washing hands or toothbrush'},
        {resources: "hot towel warmer", description: 'cube shaped object used for heating towels'},
        {resources: "computer", description: 'cube shaped object used for doing homework'},
        {resources: "clothes", description: 'fabric object to cover ones nakedness'},

    ])
}