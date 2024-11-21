const ServiceOrganization = require("../service/organization");

class ApiOrganization {
    async FindById(req, res) {
        try {
            const { id } = req.params;
            const organization = await ServiceOrganization.FindById(id);
            if (!organization) {
                return res.status(404).send({ message: "Organização não encontrada" });
            }
            res.status(200).send(organization);
        } catch (error) {
            res.status(500).send({ msg: error.message });
        }
    }

    async Create(req, res) {
        try {
            const { name, address, phone, email } = req.body;
            const organization = await ServiceOrganization.Create({ name, address, phone, email });
            res.status(201).send(organization);
        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }

    async Update(req, res) {
        try {
            const { id } = req.params;
            const { name, address, phone, email } = req.body; // Extração correta dos campos
            const organization = await ServiceOrganization.Update(id, name, address, phone, email);
            res.status(200).send(organization);
        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const result = await ServiceOrganization.Delete(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    }
}

module.exports = new ApiOrganization();
