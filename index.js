const express = require('express');
const database = require('./src/database');
const userRouter = require('./src/routes/user');
const organizationRouter = require('./src/routes/organization');
const inventoryRouter = require('./src/routes/inventory');
const movementRouter = require('./src/routes/inventoryMovement');
const productRouter = require('./src/routes/product');
const Apiuser = require('./src/api/user');


const port = 3000;
const app = express();

app.use(express.json());

app.post('/api/v1/login',Apiuser.Login)

app.use('/api/v1/organization', organizationRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/inventory', inventoryRouter)
app.use('/api/v1/inventoryMovement', movementRouter)


database.db
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.info(`SERVIDOR RODANDO NA PORTA ${port}!!`);
        });
    })
    .catch((e) => {
        console.error(`NÃO FOI POSSÍVEL CONECTAR COM O BANCO!! ${e}`);
    });
