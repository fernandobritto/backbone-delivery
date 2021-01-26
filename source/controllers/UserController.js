import User from '../models/User'

class UserController {

    // INDEX
    async index(req, res){
        try {
            const users = await User.findAll({attributes: ['id','name', 'email', 'access_code', 'team']})
            return res.status(200).json(users)
        } catch (error) {
            return res.json(null)
        }
    }



    // SHOW
    async show(req, res){
        try {
            const user = await User.findByPk(req.params.id)

            if(!user){
                return res.status(400).json({
                    errors: ['User not found']
                })
            }

            return res.status(200).json({salesman: [user.name, user.email, user.access_code, user.team] })
        } catch (error) {
            return res.json(null)
        }
    }



    // STORE
    async store(req, res){
        try {
            const newUser = await User.create(req.body)
            return res.status(200).json(newUser)
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }



    // UPDATE
    async update(req, res){
        try {
            const user = await User.findByPk(req.params.id)
            if(!user){
                return res.status(400).json({
                    errors: ['User not found']
                })
            }
            const userUp =  user.update(req.body)
            return res.status(200).json(userUp)
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }



    // DELETE
    async delete(req, res){
        try {

            const user = await User.findByPk(req.params.id)

            if(!user){
                return res.status(400).json({
                  errors: ['USER not found']
                })
            }

            const userEnd = await user.destroy()

            return res.status(200).json('User successfully deleted')

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }







}

export default new UserController
