import express from 'express'
import { Routers } from '../routers'
import { bodyParserMiddleware } from './http/middlewares/bodyParserMiddleware'

export class App {
    public server: express.Application

    constructor() {
        this.server = express()
        this.middleware()
        this.router()
    }

    private middleware(): void {
        this.server.use(bodyParserMiddleware())
    }

    private router(): void {
        this.server.use(new Routers().router)
    }
}
