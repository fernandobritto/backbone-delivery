import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mainRoute from './routes/mainRoute'

class App {
  public app: express.Application

  public constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  private middlewares () {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  private routes () {
    this.app.use('/', mainRoute)
  }
}

export default new App().app
