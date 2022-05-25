const {User} = require('../Models/User')
const asyncmiddleware  = require('../Middleware/async')


exports.createUser = asyncmiddleware(async(req,res)=>{

const user = req.body 
    
if(!user) return res.status(400).send({message : "Please Enter All Fields"})

const {name = '' , email= '' , password =''} = req.body || {}



const result = new User({
    name,
    email,
    password
})

await result.save()

return res.status(200).send({message : 'User Created ::' , value : result})


})


exports.getUser = asyncmiddleware(async(req,res)=>{

const user = req.body.email

if(!user) return res.status(400).send({message : "Enter Email"})

const result = await User.findOne({email:req.body.email})

if(!result) return res.status(400).send({message : "User Does't exists"})

return res.status(200).send({message : 'User Data ::' , value : result})



})