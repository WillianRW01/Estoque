const express = require('express')
const ApiInventory = require ('../api/inventory')
const inventoryRouter = express.Router();

inventoryRouter.get('/', ApiInventory.FindAll)
inventoryRouter.get('/:id', ApiInventory.FindById)

inventoryRouter.post('/', ApiInventory.Create)
inventoryRouter.put('/:id', ApiInventory.Update)
inventoryRouter.delete('/:id', ApiInventory.Delete)


module.exports = inventoryRouter;