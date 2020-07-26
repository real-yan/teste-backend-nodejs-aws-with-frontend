const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const swaggerUi = require('swagger-ui-express')
const handlebars = require("express-handlebars");
const swaggerDocs = require('./config/swaggerDocs')
const settings = require('./config/settings')
const index = require('./routes/index')
const app = express()

/**
 * Configuração do Body Parser
 */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/**
 * Configuração do Handlebars
 */
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

/**
 * Configuração do Path
 */
app.use(express.static(path.join(__dirname, "public")))

/** 
 * Configuração do Swagger 
*/
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/** 
 * Configuração das Rotas
*/
app.use(index)

/** 
 * Inicialização do servidor
*/
app.listen(settings.ENV.PORT, () => {
    console.log("Servidor executando na porta " + settings.ENV.PORT +".")
})
