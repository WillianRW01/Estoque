const express = require('express')
const ApiProduct = require('../api/product')
const productRouter = express.Router();

productRouter.get('/',ApiProduct.FindAll)
productRouter.get('/:id',ApiProduct.FindById)

productRouter.post('/',ApiProduct.Create)
productRouter.put('/:id',ApiProduct.Update)
productRouter.delete('/:id',ApiProduct.Delete)


module.exports = productRouter;