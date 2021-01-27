import Sequelize from 'sequelize'
import dbConfig from '../config/database'
import User from '../models/User'
import Customer from '../models/Customer'

const modelsx = [User, Customer]
const connection = new Sequelize(dbConfig)

modelsx.forEach((model) => model.init(connection))

Customer.associate(connection.models)
