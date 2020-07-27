const request = require('request-promise');
const settings = require('../settings');

class LojaService {
    /**
     * @description Criar uma instância da classe LojaService
     */
    constructor() {}

    /**
     * @description Criar um novo registro de Loja
     * @param body {object} Objeto com as informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    create(body) {
        return request({
            uri: settings.API.HOST +'/lojas/adicionar',
            body: body,
            json: true,
            method: 'POST'
        })
    }

    /**
     * @description Retornar todos os registros de Loja
     * @returns {Promise} Retorna o resultado da operação
     */
    findAll() {
        return request({
            url: settings.API.HOST +'/lojas',
            method: 'GET'
        })
    }

    /**
     * @description Retornar um registro de Loja pelo seu ID
     * @param id {integer} ID do registro a ser retornado
     * @returns {Promise} Retorna o resultado da operação
     */
    findById (id) {
        return request({
            url: settings.API.HOST +'/loja/'+ id,
            method: 'GET'
        })
    }

    /**
     * @description Atualiza um registro de Loja
     * @param id {integer} ID do registro a ser atualizado
     * @param body {object} Objeto com as novas informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    update (id, body) {
        return request({
            uri: settings.API.HOST +'/lojas/alterar/'+ id,
            body: body,
            json: true,
            method: 'POST'
        })
    }

    /**
     * @description Remove um registr de Loja
     * @param id {integer} ID do registro a ser removido
     * @returns {Promise} Retorna o resultado da operação
     */
    delete (id) {
        return request({
            uri: settings.API.HOST +'/lojas/remover/',
            body: {id: id},
            json: true,
            method: 'POST'
        })
    }
} 

module.exports = LojaService