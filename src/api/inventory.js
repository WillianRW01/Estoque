const serviceInventory = require("../service/inventory")

class ApiInventory {

    async FindById(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const inventory = await serviceInventory.FindById(organizationId, id)
            res.status(200).send({ inventory })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async FindAll(req, res) {
        try {
            const organizationId = req.session.organizationId
            const inventories = await serviceInventory.FindAll(organizationId)
            res.status(200).send({ inventories })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }


    async Create(req, res) {
        try {
            const organizationId = req.session.id
            const { name } = req.body
            const inventory = await serviceInventory.Create(organizationId, name)
            res.status(200).send({ inventory })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const { name } = req.body
            const inventory = await serviceInventory.Update(organizationId, id, name)
            res.status(200).send({ inventory })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Delete(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const inventory = await serviceInventory.Delete(organizationId, id)
            res.status(200).send({ inventory })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }



}

module.exports = new ApiInventory()