let {Sequelize, DataTypes } = require('sequelize')

let env = process.env.NODE_ENV || 'development'
let config = require(__dirname + '/../config.json')[env]

let db = {}

let sequelize

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config)
}

let plantModel = require('./plant_record')(sequelize, DataTypes)
db[plantModel.name] = plantModel

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db