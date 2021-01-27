import User from '../models/User'
import Customer from '../models/Customer'

class CustomerController {
    //INDEX
    async index(req, res){
        try {
            const customers = await Customer.findAll()
            return res.status(200).json(customers)
        } catch (error) {
            return res.json(null)
        }
    }

    //SHOW

    //STORE
    async store(req, res){
        try {
            const {user_id} = req.params

            const user = await User.findByPk(user_id)
            if(!user){
                return res.status(400).json({ error: 'User not found' })
            }

            const customer = await Customer.create(req.body)
            return res.status(200).json(customer)

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }


    //UPDATE


    //DELETE
}

export default new CustomerController
