const SequelizeService = require('./SequelizeService')
const ProdutoModel = require('../models/Produto')

class ProdutoService {
    /**
     * @description Criar uma instância da classe ProdutoService
     */
    constructor(){
        this.DBServiceInstance = new SequelizeService(ProdutoModel)
    }

    /**
     * @description Criar um novo registro de Produto
     * @param body {object} Objeto com as informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    create(body) {       
        return this.DBServiceInstance.create(body) 
    }

    /**
     * @description Retornar todos os registros de Produto a partir de condições
     * @param condition {object} Condições nas quais os registros retornados se enquadrarão
     * @returns {Promise} Retorna o resultado da operação
     */
    findAllByCondition(condition) {
        return this.DBServiceInstance.findAll(condition)
    }

    /**
     * @description Retornar um registro de Produto pelo seu ID
     * @param id {integer} ID do registro a ser retornado
     * @returns {Promise} Retorna o resultado da operação
     */
    findById(id) {
        return this.DBServiceInstance.findById(id)    
    }

    /**
     * @description Atualiza um registro de Produto
     * @param id {integer} ID do registro a ser atualizado
     * @param body {object} Objeto com as novas informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    update(id, body) {
        return this.DBServiceInstance.update(id, body)
    }

    /**
     * @description Remove um registr de Produto
     * @param id {integer} ID do registro a ser removido
     * @returns {Promise} Retorna o resultado da operação
     */
    delete(id) {
        return this.DBServiceInstance.delete(id)     
    }
} 

module.exports = ProdutoService