class ApiInventoryMovement{

    async FindById(req,res){
       try {
           const { id } = req.params
           const inventoryMovement ={} 
           res.status(200).send({inventoryMovement})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }

    async FindAll(req,res){
        try {
            const inventoryMovements =[{}]
            res.status(200).send({inventoryMovements})
        } catch (error) {
            res.status(500).send({msg: error.menssage})
        }
     }

   
    async Create(req,res){
       try {
           const { id } = req.params
           const inventoryMovement ={} 
           res.status(200).send({inventoryMovement})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Update(req,res){
       try {
           const { id } = req.params
           const inventoryMovement ={} 
           res.status(200).send({inventoryMovement})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Delete(req,res){
       try {
           const { id } = req.params
           const inventoryMovement ={} 
           res.status(200).send({inventoryMovement})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
   
   
   }
   
   module.exports = new ApiInventoryMovement()