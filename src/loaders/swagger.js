const swaggerJSDoc = require('swagger-jsdoc')
const settings = require('../settings')

/**
 * Configura documentação via Swagger
 */
const swaggerDocs = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: settings.PROJ.TITLE,
            version: settings.PROJ.VERSION,
            description: settings.PROJ.DESCRIPTION,
            contact: {
                name: settings.PROJ.OWNER
            },
            basePath: settings.ENV.BASEPATH,
            servers: ["https://"+ settings.ENV.HOST +":"+ settings.ENV.PORT]
        }
    },
    apis: ["./routes/swagger/lojas.js", "./routes/swagger/produtos.js"]
})

module.exports = swaggerDocs