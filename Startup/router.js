const userRoutes = require('../Routes/userRoutes')



module.exports = function(app){

app.get('/',(req,res)=>{return res.send({message : "Welcome TO MY App"})})

app.use('/user',userRoutes)







app.use('*',(req,res)=>{return res.send({message : "Route You Are Looking For Does't Exists"})})

}