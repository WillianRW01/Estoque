const modelInventory = require("../model/inventory")

class ServiceInventory {
    async FindById(organizationId, id, transaction) {
        return modelInventory.findOne({
            where:
                { organizationId, id }
        },
            { transaction })
    }
    async FindAll(organizationId, transaction) {
        return modelInventory.findAll({
            where:
                { organizationId }
        },
            { transaction })
    }
    async Create(organizationId, name, transaction) {
        if (!organizationId)
            throw new Error(" Favor informar o campo Organização ")

        if (!name)
            throw new Error(" Favor informar o campo Nome ")

        return modelInventory.create({ organizationId, name },
            { transaction }
        )
    }

    async Update(organizationId, id, name, transaction) {
        const oldInventory = await this.FindById(organizationId, id, transaction)
        if (!oldInventory) {
            throw new Error("Estoque não encontrado")
        }
        oldInventory.name = name || oldInventory.name

        return oldInventory.save({ transaction })
    }
    async Delete(organizationId, id, transaction) {

        const oldInventory = await this.FindById(organizationId, id, transaction)

        if (!oldInventory) {
            throw new Error("Estoque não encontrado")
        }

        await oldInventory.destroy({ transaction })
    }
}
module.exports = new ServiceInventory()