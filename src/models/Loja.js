const db = require('../config/db')

/**
 * Modelagem da tabela lojas
 */
const Loja = db.sequelize.define('lojas', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    matriz: db.Sequelize.BOOLEAN,
    cnpj: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    inscrestadual: db.Sequelize.STRING,
    inscrmunicipal: db.Sequelize.STRING,
    rua: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    bairro: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    complemento: db.Sequelize.STRING,
    cidade: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    uf: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: db.Sequelize.STRING,
    email: db.Sequelize.STRING,
    responsavel: db.Sequelize.STRING,
    obs: db.Sequelize.STRING
})

module.exports = Loja