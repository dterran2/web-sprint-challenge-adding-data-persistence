const { leftJoin } = require("../data/config")
const db = require("../data/config")

function find() {
    return db('resources as r')
        .leftJoin('')
}