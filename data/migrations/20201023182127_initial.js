
exports.up = async function(knex) {
    await knex.schema.createTable('project', (table) => {
        table.increments('id')
        table.text('project').notNull()
        table.text('description')
        table.boolean('projectComplete').defaultTo(false)
    })

    await knex.schema.createTable('resources', (table) => {
        table.increments('id')
        table.text('resources').notNull()
        table.text('description')
    })

    await knex.schema.createTable('tasks', (table) => {
        table.increments('id')
        table.text('description').notNull()
        table.text('notes')
        table.boolean('taskComplete').defaultTo(false)
    })

    await knex.schema.createTable('project_task', (table) => {
        table.integer('project_id').notNull().references('id').inTable('project')
        table.integer('task_id').notNull().references('id').inTable('task')
        table.primary(['project_id', 'task_id'])
    })

    await knex.schema.createTable('project_resources', (table) => {
        table.integer('project_id').notNull().references('id').inTable('project')
        table.integer('resources_id').notNull().references('id').inTable('resources')
        table.primary(['project_id', 'resources_id']) 
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resources')
    await knex.schema.dropTableIfExists('project_task')
    await knex.schema.dropTableIfExists('task')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('project')
};
