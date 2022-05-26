const userRoutes = require('../Routes/userRoutes')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
// const swaggerJsDocs = YAML.load('./Swagger/api.yaml')
const swaggerJsDocs = YAML.load('./Swagger/api.yaml')


module.exports = function (app) {

    app.get('/', (req, res) => { return res.render("home") })
    app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))
    app.use('/user', userRoutes)







    app.use('*', (req, res) => { return res.send({ message: "Route You Are Looking For Does't Exists" }) })

}