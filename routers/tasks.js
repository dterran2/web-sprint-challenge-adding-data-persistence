const express = require("express")
const tasks = require("../models/tasks")

const router = express.Router()

router.get('/tasks', async (req, res, next) => {
    try {
        const tasks = await tasks.find()
        res.json(tasks)
    }catch(err) {
        next(err)
    }
})

router.get('/tasks/:id', async (req, res, next) => {
    try{
        const tasks = await tasks.findById(req.params.id)
        if(!tasks) {
            return res.status(404).json({
                message: "Tasks not found",
            })
        }
        res.json(tasks)
    }catch(err) {
        next(err)
    }
})

module.exports = router