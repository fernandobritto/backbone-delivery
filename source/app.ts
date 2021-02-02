import express from 'express'
import mainRote from './routes/mainRote'

class App {
    public app: express.Application

    public constructor () {
      this.app = express()
      this.middlewares()
      this.routes()
    }

    private middlewares () :void {
      this.app.use(express.urlencoded({ extended: true }))
      this.app.use(express.json())
    }

    private routes () :void {
      this.app.use('/', mainRote)
    }
}

export default new App().app
