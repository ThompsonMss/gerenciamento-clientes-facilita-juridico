import { Router } from 'express'
import { ClientController } from '../infrastructure/http/controllers/ClientController'

export class Routers {
    public router: Router

    constructor() {
        this.router = Router()
        this.exec()
    }

    private exec(): void {
        this.routesClient()
    }

    private routesClient(): void {
        const controller = new ClientController()

        this.router.post('/create-client', (req, res) =>
            controller.store(req, res)
        )
    }
}
