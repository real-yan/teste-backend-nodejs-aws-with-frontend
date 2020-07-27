const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const swaggerUi = require('swagger-ui-express')
const handlebars = require("express-handlebars");
const swaggerDocs = require('./config/swaggerDocs')
const session = require("express-session");
const flash = require("connect-flash");
const settings = require('./settings')
const index = require('./routes/index')
const app = express()

/**
 * Configuração do Body Parser
 */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/** 
 * Configurações de Sessão
*/
app.use(session({
    secret: "projetoGastosSecret",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

/** 
 * Configurações de Middleware
*/
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
})

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
