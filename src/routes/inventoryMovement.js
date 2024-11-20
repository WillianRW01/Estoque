const express = require('express')
const ApiInventoryMovement =require ('../api/inventoryMovement')

const movementRouter = express.Router();

movementRouter.get('/inventoryId', ApiInventoryMovement.FindAll)
movementRouter.get('/:id', ApiInventoryMovement.FindById)

movementRouter.post('/', ApiInventoryMovement.Create)
movementRouter.put('/:id', ApiInventoryMovement.Update)
movementRouter.delete('/:id', ApiInventoryMovement.Delete)


module.exports = movementRouter;