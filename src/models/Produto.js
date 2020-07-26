const db = require('../config/db')
const Loja = require('./Loja')

/**
 * Modelagem da tabela produtos
 */
const Produto = db.sequelize.define('produtos', {
    lojaId: {
        type: db.Sequelize.INTEGER,
        references: {
            model: 'lojas',
            key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    codigo: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    classificacao: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    fabricacao: db.Sequelize.DATE,
    validade: db.Sequelize.DATE,
    valor: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
    obs: db.Sequelize.STRING
})
Loja.hasMany(Produto)

module.exports = Produto