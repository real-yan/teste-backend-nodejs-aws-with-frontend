const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const handlebars = require("express-handlebars");
const session = require("express-session");
const flash = require("connect-flash");
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger')
const index = require('../routes/index')
const app = express()

const init = () => {
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

    return app
}

module.exports = {init}