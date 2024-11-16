const express = require('express');
const ApiUser = require ("../api/user")
const userRouter = express.Router();  // Correção aqui

// Opções do usuário 
userRouter.get('/info',ApiUser.FindById);
userRouter.put('/',ApiUser.Update);
userRouter.delete('/',ApiUser.Delete);

// Opções do ADM
userRouter.post('/',ApiUser.Create);
userRouter.get('/',ApiUser.FindAll);
userRouter.get('/:id',ApiUser.FindById);
userRouter.put('/:id',ApiUser.Update);
userRouter.delete('/:id',ApiUser.Delete);

module.exports = userRouter;
