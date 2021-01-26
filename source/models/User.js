import Sequelize, { Model } from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class User extends Model {
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [5, 15],
                        msg: 'Please enter your name'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: "Invalid email, check that you typed correctly"
                    }
                }
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [5, 15],
                        msg: "The password must contain more than 5 characters"
                    }
                }
            },
            access_code: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    customValidator(value){
                        if(value === null){
                            throw new Error("you can't leave this field null")
                        }
                    }
                }
            },
            team: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
        },{ sequelize })


        this.addHook('beforeSave', async user =>{
           user.password_hash = await bcryptjs.hash(user.password, 8)
        })

        return this
    }

}
