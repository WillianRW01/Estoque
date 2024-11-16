class ApiProduct{

    async FindById(req,res){
       try {
           const { id } = req.params
           const product ={} 
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }

    async FindAll(req,res){
        try {
            const users =[{}]
            res.status(200).send({products})
        } catch (error) {
            res.status(500).send({msg: error.menssage})
        }
     }

   
    async Create(req,res){
       try {
           const { id } = req.params
           const product ={} 
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Update(req,res){
       try {
           const { id } = req.params
           const product ={} 
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Delete(req,res){
       try {
           const { id } = req.params
           const product ={} 
           res.status(200).send({product})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
   
   
   }
   
   module.exports = new ApiProduct()