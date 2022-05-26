const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv =require('dotenv').config()
const port = process.env.PORT
const db = process.env.DB
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load('./Swagger/api.yaml')


// app.use("/" , swaggerUI.serve , swaggerUI.setup(swaggerJsDocs))
app.get("/" , swaggerUI.serve , swaggerUI.setup(swaggerJsDocs))
app.use(express.json())


mongoose.connect(db).then(console.log(`Connected To DataBase ${db} `,)
).catch(ex=>{console.log(`Failed To Connect : ${ex.message}`)})



require('./Startup/router')(app)

app.listen(port,()=>{console.log(`Connected To DataBase ${port}`)})