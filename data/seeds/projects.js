
exports.seed = async function(knex) {
  await knex('project').insert([
    {project: 'Go to work', description: 'Wake up, shower, lock front door, get in car drive to work', projectComplete: true},
    {project: 'Arrive at work', description: 'Unlock doors, turn on towel warmer, turn on bed warmer, prep warm towels', projectComplete: true},
    {project: 'Leave work', description: 'Turn off towel warmer, turn off bed warmer, wash towels, lock doors', projectComplete: true},
    {project: 'Go home', description: 'Get in car drive home, unlock front door, relax in bed', projectComplete: true},
    {project: 'Do homework', description: 'Turn on computer, watch class videos, work on homework', projectComplete: false},
    {project: 'Finish homework', description: 'Turn off computer, shower, go to bed', projectComplete: false},
])
};
