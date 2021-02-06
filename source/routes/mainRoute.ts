import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes
  .get('/', UserController.index)
  .get('/:id', UserController.show)
  .post('/', UserController.store)
  .put('/:id', UserController.update)
  .delete('/:id', UserController.delete)

export default routes
