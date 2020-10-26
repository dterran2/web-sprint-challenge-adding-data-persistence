exports.seed = async function(knex) {
	await knex("project_resources").truncate()
	await knex("project_task").truncate()
	await knex("tasks").truncate()
    await knex("resources").truncate()
    await knex("project").truncate()
}