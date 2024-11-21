const serviceUser = require("../service/user")

class ApiUser {

    async FindById(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const user = await serviceUser.FindById(organizationId, id)
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async FindAll(req, res) {
        try {
            const organizationId = req.session.organizationId
            const users = await serviceUser.FindAll(organizationId, id)
            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }


    async Create(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { name, email, password, role } = req.body
            const user = await serviceUser.Create(organizationId, name, email, password, role)
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Update(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const { name, email, password, role } = req.body
            const user = await serviceUser.Update(organizationId, id, name, email, password, role)
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Delete(req, res) {
        try {
            const organizationId = req.session.organizationId
            const { id } = req.params
            const user = await serviceUser.Delete(organizationId, id)
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body;
    
            // Chama o método Login no Service
            const token = await serviceUser.Login(email, password);
    
            // Retorna o token para o cliente
            res.status(200).send({ token });
        } catch (error) {
            // Retorna a mensagem de erro
            res.status(500).send({ msg: error.message });
        }
    }
    


    }



module.exports = new ApiUser()