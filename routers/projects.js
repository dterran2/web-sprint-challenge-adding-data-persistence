const express = require("express")
const projects = require("../models/projects")

const router = express.Router()

router.get('/projects', async (req, res, next) => {
    try {
        const projects = await projects.find()
        res.json(projects)
    }catch(err) {
        next(err)
    }
})

router.get('/projects/:id', async (req, res, next) => {
    try{
        const projects = await projects.findById(req.params.id)
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

module.exports = router