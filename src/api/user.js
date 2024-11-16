class ApiUser{

    async FindById(req,res){
       try {
           const { id } = req.params
           const user ={} 
           res.status(200).send({user})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }

    async FindAll(req,res){
        try {
            const users =[{}]
            res.status(200).send({users})
        } catch (error) {
            res.status(500).send({msg: error.menssage})
        }
     }

   
    async Create(req,res){
       try {
           const { id } = req.params
           const user ={} 
           res.status(200).send({user})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Update(req,res){
       try {
           const { id } = req.params
           const user ={} 
           res.status(200).send({user})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
    async Delete(req,res){
       try {
           const { id } = req.params
           const user ={} 
           res.status(200).send({user})
       } catch (error) {
           res.status(500).send({msg: error.menssage})
       }
    }
   
   
   
   }
   
   module.exports = new ApiUser()