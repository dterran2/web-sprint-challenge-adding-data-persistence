const express = require("express")
const Projects = require("../models/projects")

const router = express.Router()

router.get('/projects', async (req, res, next) => {
    try {
        const projects = await Projects.find()
        res.json(projects)
    }catch(err) {
        next(err)
    }
})

router.get('/projects/:id', async (req, res, next) => {
    try{
        const projects = await Projects.findById(req.params.id)
        if(!projects) {
            return res.status(404).json({
                message: "Projects not found",
            })
        }
        res.json(projects)
    }catch(err) {
        next(err)
    }
})

router.post("/projects", async (req, res, next) => {
	try {
		const [id] = await Projects.find().insert(req.body)
		const projects = await Projects.find().where({ id }).first()

		res.status(201).json(projects)
	} catch(err) {
		next(err)
	}
})

module.exports = router