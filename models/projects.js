const db = require('../data/config')

function find() {
    return db('project')
}

function findById(id) {
    return db('projects as p')
        .where('p.id', id)
}

module.exports = {
    find,
    findById,
}