const Sequelize = require('sequelize')
const settings = require('./settings')

/**
 * Configura conexão com o banco via Sequelize
 */
const sequelize = new Sequelize(settings.DB.NAME, 
    settings.DB.USERNAME, 
    settings.DB.PASSWORD, {
        host: settings.DB.HOST,
        dialect: settings.DB.DIALECT
    })

module.exports = {Sequelize, sequelize}