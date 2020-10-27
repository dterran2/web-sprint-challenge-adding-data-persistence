const express = require("express")
const Resources = require("../models/resources")

const router = express.Router()

router.get('/resources', async (req, res, next) => {
    try {
        const resources = await Resources.find()
        res.json(resources)
    }catch(err) {
        next(err)
    }
})

router.get('/resources/:id', async (req, res, next) => {
    try{
        const resources = await Resources.findById(req.params.id)
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

router.post("/resources", async (req, res, next) => {
	try {
		const [id] = await Resources.find().insert(req.body)
		const resources = await Resources.find().where({ id }).first()

		res.status(201).json(resources)
	} catch(err) {
		next(err)
	}
})


module.exports = router
