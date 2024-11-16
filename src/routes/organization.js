const express = require('express')
const ApiOrganization = require("../api/organization")
const organizationRouter = express.Router();

organizationRouter.get('/:id',ApiOrganization.FindById)
organizationRouter.post('/', ApiOrganization.Create)
organizationRouter.put('/:id', ApiOrganization.Update)
organizationRouter.delete('/:id', ApiOrganization.Delete)


module.exports = organizationRouter;