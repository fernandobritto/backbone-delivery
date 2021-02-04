import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  res.send('Tudo Ok')
})

export default routes
