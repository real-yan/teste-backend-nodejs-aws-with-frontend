const SequelizeService = require('./SequelizeService')
const LojaModel = require('../models/Loja')

class LojaService {
    /**
     * @description Criar uma instância da classe LojaService
     */
    constructor(){
        this.DBServiceInstance = new SequelizeService(LojaModel)
    }

    /**
     * @description Criar um novo registro de Loja
     * @param body {object} Objeto com as informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    create(body) {       
        return this.DBServiceInstance.create(body) 
    }

    /**
     * @description Retornar todos os registros de Loja
     * @returns {Promise} Retorna o resultado da operação
     */
    findAll() {
        return this.DBServiceInstance.findAll()
    }

    /**
     * @description Retornar um registro de Loja pelo seu ID
     * @param id {integer} ID do registro a ser retornado
     * @returns {Promise} Retorna o resultado da operação
     */
    findById(id) {
        return this.DBServiceInstance.findById(id)    
    }

    /**
     * @description Atualiza um registro de Loja
     * @param id {integer} ID do registro a ser atualizado
     * @param body {object} Objeto com as novas informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    update(id, body) {
        return this.DBServiceInstance.update(id, body)
    }

    /**
     * @description Remove um registr de Loja
     * @param id {integer} ID do registro a ser removido
     * @returns {Promise} Retorna o resultado da operação
     */
    delete(id) {
        return this.DBServiceInstance.delete(id)     
    }
} 

module.exports = LojaService