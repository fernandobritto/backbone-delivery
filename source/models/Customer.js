import Sequelize, { Model } from 'sequelize'

export default class Customer extends Model {
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [5, 50],
                        msg: 'The name field must contain at least 5 characters'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Invalid email!'
                    }
                }

            },
            age: {
                type: Sequelize.DECIMAL,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'The age field cannot be empty'
                    }
                }
            },
            cpf: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'The CPF field cannot be empty'
                    }
                }

            },
            address: {
                type: Sequelize.TEXT,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'The address field cannot be empty'
                    }
                }
            },
            phone: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'The phone field cannot be empty'
                    }
                }
            },
        },{sequelize})

        return this
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'salesman'})
    }
}
