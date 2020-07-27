const request = require('request-promise');
const settings = require('../settings');

class ProdutoService {
    /**
     * @description Criar uma instância da classe ProdutoService
     */
    constructor() {}

    /**
     * @description Criar um novo registro de Produto
     * @param body {object} Objeto com as informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    create(body) {       
        return request({
            uri: settings.API.HOST +'/produtos/adicionar',
            body: body,
            json: true,
            method: 'POST'
        })
    }

    /**
     * @description Retornar todos os registros de Produto a partir de condições
     * @param condition {object} Condições nas quais os registros retornados se enquadrarão
     * @returns {Promise} Retorna o resultado da operação
     */
    findAllByForeignId(foreignId) {
        return request({
            url: settings.API.HOST +'/produtos/'+ foreignId,
            method: 'GET'
        })
    }

    /**
     * @description Retornar um registro de Produto pelo seu ID
     * @param id {integer} ID do registro a ser retornado
     * @returns {Promise} Retorna o resultado da operação
     */
    findById(id) {
        return request({
            url: settings.API.HOST +'/produto/'+ id,
            method: 'GET'
        })   
    }

    /**
     * @description Atualiza um registro de Produto
     * @param id {integer} ID do registro a ser atualizado
     * @param body {object} Objeto com as novas informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    update(id, body) {
        return request({
            uri: settings.API.HOST +'/produtos/alterar/'+ id,
            body: body,
            json: true,
            method: 'POST'
        })
    }

    /**
     * @description Remove um registr de Produto
     * @param id {integer} ID do registro a ser removido
     * @returns {Promise} Retorna o resultado da operação
     */
    delete(id) {
        return request({
            uri: settings.API.HOST +'/produtos/remover',
            body: {id: id},
            json: true,
            method: 'POST'
        })    
    }
} 

module.exports = ProdutoService