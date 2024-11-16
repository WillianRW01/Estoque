class ApiOrganization{

 async FindById(req,res){
    try {
        const { id } = req.params
        const organization ={} //await service.findById(organizationId)
        res.status(200).send({organization})
    } catch (error) {
        res.status(500).send({msg: error.menssage})
    }
 }

 async Create(req,res){
    try {
        const { id } = req.params
        const organization ={} 
        res.status(200).send({organization})
    } catch (error) {
        res.status(500).send({msg: error.menssage})
    }
 }

 async Update(req,res){
    try {
        const { id } = req.params
        const organization ={} 
        res.status(200).send({organization})
    } catch (error) {
        res.status(500).send({msg: error.menssage})
    }
 }

 async Delete(req,res){
    try {
        const { id } = req.params
        const organization ={} 
        res.status(200).send({organization})
    } catch (error) {
        res.status(500).send({msg: error.menssage})
    }
 }



}

module.exports = new ApiOrganization()