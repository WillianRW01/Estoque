const inventoryMovement = require("../model/inventoryMovement");

const MovementTypes = ['out', 'in'];

class ServiceInventoryMovement {
    async FindById(organizationId, inventoryId, id, transaction) {
        if (!organizationId || !inventoryId || !id) {
            throw new Error("Os campos organizationId, inventoryId e id são obrigatórios.");
        }
        return inventoryMovement.findOne({
            where: { organizationId, inventoryId, id },
            transaction 
        });
    }

    async FindAll(organizationId, inventoryId, transaction) {
        if (!organizationId || !inventoryId) {
            throw new Error("Os campos organizationId e inventoryId são obrigatórios.");
        }
        return inventoryMovement.findAll({
            where: { organizationId, inventoryId },
            transaction
        });
    }

    async Create(organizationId, inventoryId, userId, type, amount, productId, transaction) {
 
        if (!organizationId) throw new Error("Favor informar o campo Organização.");
        if (!inventoryId) throw new Error("Favor informar o campo Inventário.");
        if (!userId) throw new Error("Favor informar o campo Usuário.");
        if (!type || !MovementTypes.includes(type)) {
            throw new Error(`Tipo inválido. Os tipos permitidos são: ${MovementTypes.join(", ")}.`);
        }
        if (!amount || amount <= 0) throw new Error("Favor informar um valor positivo no campo Quantia.");
        if (!productId) throw new Error("Favor informar o campo Produto.");

        return inventoryMovement.create(
            { organizationId, inventoryId, userId, type, amount, productId },
            { transaction }
        );
    }

    async Update(organizationId, inventoryId, id, type, amount, transaction) {

        const oldInventoryMovement = await this.FindById(organizationId, inventoryId, id, transaction);
        if (!oldInventoryMovement) {
            throw new Error("Movimentação de estoque não encontrada.");
        }

        
        if (type && !MovementTypes.includes(type)) {
            throw new Error(`Tipo inválido. Os tipos permitidos são: ${MovementTypes.join(", ")}.`);
        }


        oldInventoryMovement.type = type || oldInventoryMovement.type;
        oldInventoryMovement.amount = amount || oldInventoryMovement.amount;

        return oldInventoryMovement.save({ transaction });
    }

    async Delete(organizationId, inventoryId, id, transaction) {
  
        const oldInventoryMovement = await this.FindById(organizationId, inventoryId, id, transaction);
        if (!oldInventoryMovement) {
            throw new Error("Movimentação de estoque não encontrada.");
        }

        await oldInventoryMovement.destroy({ transaction });
    }
}

module.exports = new ServiceInventoryMovement();
