const e = require("express");
const ModelUser = require("../model/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const roles = ['admin', 'employee']
const salt = 12
const secret = "Batata"
class ServiceUser {
    async FindAll(organizationId, transaction) {
        return ModelUser.findAll({
            where: { organizationId },
            transaction,
        });
    }

    async FindById(organizationId, id, transaction) {
        return ModelUser.findOne({
            where: { organizationId, id },
            transaction,
        });
    }

    async Create(organizationId, name, email, password, role, transaction) {
        if (!organizationId) throw new Error("POR FAVOR INFORMAR A ORGANIZAÇÃO");
        if (!name) throw new Error("POR FAVOR INFORMAR O CAMPO NOME");
        if (!email) throw new Error("POR FAVOR INFORMAR O EMAIL");
        if (!password) throw new Error("POR FAVOR INFORMAR A SENHA");
        if (!role || !roles.includes(role)) throw new Error("POR FAVOR INFORMAR A PERMISSÃO CORRETAMENTE ");

        const hashPass = await bcrypt.hash(password, salt)

        return ModelUser.create(
            { organizationId, name, email, password: hashPass, role },
            { transaction }
        );
    }

    async Update(organizationId, id, name, email, password, role, transaction) {
        const oldUser = await this.FindById(organizationId, id, transaction)
        if (!oldUser) {
            throw new error("usuario não encontrado ")
        }
        if (role && !roles.includes(role)) {
            throw new Error("Favor informar a permissão corretamente")
        }

        if (role && oldUser.role == "admin") {
            oldUser.role = role
        }

        oldUser.name = name || oldUser.name
        oldUser.email = email || oldUser.email
        oldUser.password = password ? await bcrypt.hash(password, salt) : oldUser.password

        await oldUser.save({ transaction })

        return oldUser

    }

    async Delete(organizationId, id, transaction) {
        const oldUser = await this.FindById(organizationId, id, transaction);

        if (!oldUser) {
            throw new error("usuario não encontrado ")
        }

        await oldUser.destroy({ transaction });

        return { message: "Usuário deletado com sucesso" };
    }
    async Login(email, password) {
        if (!email || !password) {
            throw new Error("Favor informar email e senha.");
        }
        const user = await ModelUser.findOne({
            where: { email },
        });

        if (!user) {
            throw new Error("E-mail ou senha inválidos.");
        }
        const verify = await bcrypt.compare(password, user.password);
        if (verify) {
     
            return jwt.sign(
                {
                    id: user.id,
                    role: user.role,
                    organizationId: user.organizationId,
                },
                secret,
                { expiresIn: 60 * 60 }
            );
        }
        throw new Error("E-mail ou senha inválidos.");
    }
    
    
    // async Verifify
}

module.exports = new ServiceUser();
