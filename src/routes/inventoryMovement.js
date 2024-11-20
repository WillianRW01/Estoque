const express = require('express')
const ApiInventoryMovement =require ('../api/inventoryMovement')

const movementRouter = express.Router();

movementRouter.get('/:inventoryId/', ApiInventoryMovement.FindAll)
movementRouter.get('/:inventoryId/:id', ApiInventoryMovement.FindById)

movementRouter.post('/:inventoryId', ApiInventoryMovement.Create)
movementRouter.put('/:inventoryId/:id', ApiInventoryMovement.Update)
movementRouter.delete('/:inventoryId/:id', ApiInventoryMovement.Delete)


module.exports = movementRouter;