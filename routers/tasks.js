const express = require("express")
const Tasks = require("../models/tasks")

const router = express.Router()

router.get('/tasks', async (req, res, next) => {
    try {
        const tasks = await Tasks.find()
        res.json(tasks)
    }catch(err) {
        next(err)
    }
})

router.get('/tasks/:id', async (req, res, next) => {
    try{
        const tasks = await Tasks.findById(req.params.id)
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

router.post("/tasks", async (req, res, next) => {
	try {
		const [id] = await Tasks.find().insert(req.body)
		const tasks = await Tasks.find().where({ id }).first()

		res.status(201).json(tasks)
	} catch(err) {
		next(err)
	}
})

module.exports = router