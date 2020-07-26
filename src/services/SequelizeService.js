class SequelizeService {
    /**
     * @description Criar uma instância da classe SequilizeService
     * @param Model {sequelize.model} Sequelize Model para uso da instância
     */
    constructor (Model) {
        this.model = Model
    }

    /**
     * @description Criar um novo registro ao Model
     * @param body {object} Objeto com as informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    create(body) {
        return this.model.create(body)
    }

    /**
     * @description Retornar todos os registros do Model
     * @returns {Promise} Retorna o resultado da operação
     */
    findAll() {
        return this.model.findAll()
    }

    /**
     * @description Retornar todos os registros do Model a partir de condições
     * @param condition {object} Condições nas quais os registros retornados se enquadrarão
     * @returns {Promise} Retorna o resultado da operação
     */
    findAllByCondition(condition) {
        return this.model.findAll({
            where: condition
        })
    }

    /**
     * @description Retornar um registro do Model pelo seu ID
     * @param id {integer} ID do registro a ser retornado
     * @returns {Promise} Retorna o resultado da operação
     */
    findById (id) {
        return this.model.findByPk(id)
    }

    /**
     * @description Retorna um único registro do Model a partir de condições
     * @param condition {object} Condições nas quais o registro retornado se enquadrará
     * @returns {Promise} Retorna o resultado da operação
     */
    findOne (condition) {
        return this.model.findOne({
            where: condition 
        })
    }

    /**
     * @description Atualiza um registro do Model
     * @param id {integer} ID do registro a ser atualizado
     * @param body {object} Objeto com as novas informações do registro
     * @returns {Promise} Retorna o resultado da operação
     */
    update (id, body) {
        return this.model.update(body, {
            where: {
                id: id
            }
        })
    }
  
    /**
     * @description Remove um registr do Model
     * @param id {integer} ID do registro a ser removido
     * @returns {Promise} Retorna o resultado da operação
     */
    delete (id) {
      return this.model.destroy({
          where: {
              id: id
          }
      });
    }
}

module.exports = SequelizeService;