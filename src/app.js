const settings = require('./settings')
const express = require('./loaders/express')
const app = express.init()

/** 
 * Inicialização do servidor
*/
app.listen(settings.ENV.PORT, () => {
    console.log("Servidor executando na porta " + settings.ENV.PORT +".")
})
