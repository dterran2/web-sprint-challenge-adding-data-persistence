const express = require("express")
const resources = require("../models/resources")

const router = express.Router()

router.get('/resources', async (req, res, next) => {
    try {
        const resources = await resources.find()
        res.json(resources)
    }catch(err) {
        next(err)
    }
})

router.get('/resources/:id', async (req, res, next) => {
    try{
        const resources = await resources.findById(req.params.id)
        if(!resources) {
            return res.status(404).json({
                message: "Resources not found",
            })
        }
        res.json(resources)
    }catch(err) {
        next(err)
    }
})

module.exports = router
