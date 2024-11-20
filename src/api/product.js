const serviceProduct = require("../service/product")

class ApiProduct{

    async FindById(req,res){
       try {
           const { id } = req.params
           const organizationId = 1
           const product = await serviceProduct.FindById (organizationId,id)
           
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }

    async FindAll(req,res){
        try {
            const organizationId = 1
            const products = await serviceProduct.FindAll(organizationId)

            res.status(200).send({products})
        } catch (error) {
            res.status(500).send({msg: error.menssage})
        }
     }

   
    async Create(req,res){
       try {
          const organizationId = 1
           const { name, description } = req.body
           const product = await serviceProduct.Create(organizationId,name,description)
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Update(req,res){
       try {
           const organizationId = 1
           const {id } = req.params
           const {name, description } = req.body
           const product = await serviceProduct.Update(organizationId,id,name,description)
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Delete(req,res){
       try {
          const organizationId = 1
           const { id } = req.params
           const product = await serviceProduct.Delete(organizationId,id)
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
   
   
   }
   
   module.exports = new ApiProduct()