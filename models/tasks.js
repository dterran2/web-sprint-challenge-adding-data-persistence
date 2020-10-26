const db = require('../data/config')

function find(){
    return db('tasks')
}

function findById(id) {
    return db('tasks as t')
        .where('t.id', id)
}

module.exports = {
    find,
    findById,
}