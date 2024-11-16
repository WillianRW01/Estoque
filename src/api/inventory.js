class ApiInventory{

    async FindById(req,res){
       try {
           const { id } = req.params
           const inventory ={} 
           res.status(200).send({inventory})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }

    async FindAll(req,res){
        try {
            const inventories =[{}]
            res.status(200).send({inventories})
        } catch (error) {
            res.status(500).send({msg: error.menssage})
        }
     }

   
    async Create(req,res){
       try {
           const { id } = req.params
           const inventory ={} 
           res.status(200).send({inventory})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Update(req,res){
       try {
           const { id } = req.params
           const inventory ={} 
           res.status(200).send({inventory})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Delete(req,res){
       try {
           const { id } = req.params
           const inventory ={} 
           res.status(200).send({inventory})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
   
   
   }
   
   module.exports = new ApiInventory()