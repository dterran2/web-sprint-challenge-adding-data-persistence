
const db = require("../data/config")

function find() {
    return db('resources')
}

function findById(id) {
    return db('resources as r')
        .where('r.id', id)
}

module.exports = {
    find,
    findById,
}