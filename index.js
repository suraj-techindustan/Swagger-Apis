const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv =require('dotenv').config()
const port = process.env.PORT
const db = process.env.DB


app.use(express.json())


mongoose.connect(db).then(console.log(`Connected To DataBase ${db} `,)
).catch(ex=>{console.log(`Failed To Connect : ${ex.message}`)})


app.set('view engine','ejs')
app.set('views',__dirname+'/views')




require('./Startup/router')(app)



// for bootstrap and Css ::
app.use('/js',express.static(__dirname+"/node_modules/bootstrap/dist/js"))
app.use('/css',express.static(__dirname+"/node_modules/bootstrap/dist/css"))
app.use('/js', express.static(__dirname+'node_modules/jquery/dist'))
app.use(express.static(__dirname + '/public')); // for css


app.listen(port,()=>{console.log(`Connected To DataBase ${port}`)})