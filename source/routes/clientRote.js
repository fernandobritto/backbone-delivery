import { Router } from 'express'
import CustomerController from '../controllers/CustomerController'

const routes = new Router()

routes
    .get('/', CustomerController.index)
    .post('/', CustomerController.store)

export default routes
