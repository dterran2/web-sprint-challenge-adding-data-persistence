exports.seed = async function(knex) {
    await knex('tasks').insert([
        {description: 'open ones eyes afterwaking and breath', notes: 'hopefully you do this or your dead', taskComplete: false},
        {description: 'wash your body', notes: '', taskComplete: false},
        {description: 'brush your teeth', notes: '', taskComplete: false},
        {description: 'put clothes on', notes: '', taskComplete: false},
        {description: 'lock door', notes: '', taskComplete: false},
        {description: 'unlock door', notes: '', taskComplete: false},
        {description: 'drive car to destination', notes: '', taskComplete: false},
        {description: 'listen to school recording', notes: '', taskComplete: false},
        {description: 'finish homework', notes: '', taskComplete: false},
        {description: 'submit homework', notes: '', taskComplete: false},
    ])
}