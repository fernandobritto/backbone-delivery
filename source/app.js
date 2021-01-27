import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import compression from 'compression'
import mainRote from './routes/mainRote'
import clientRote from './routes/clientRote'
import statusMonitor from 'express-status-monitor'
import logger from './logs'
import pinoHttp from 'pino-http'
import './database'


class App {
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(compression())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(statusMonitor({ path: '/monitor'}))
        this.app.use(pinoHttp({ logger }))
    }

    routes(){
        this.app.use('/sales', mainRote)
        this.app.use('/sales/:user_id/client', clientRote)
    }


}

export default new App().app
