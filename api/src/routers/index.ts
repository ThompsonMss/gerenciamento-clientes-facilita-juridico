import { Router } from 'express'
import { ClientController } from '../infrastructure/http/controllers/ClientController'
import { CountClientController } from '../infrastructure/http/controllers/CountClientController'

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
        const baseURL = '/client'
        const controller = new ClientController()
        const countClientcontroller = new CountClientController()

        this.router.post(`${baseURL}`, async (req, res) => await controller.store(req, res))

        this.router.put(`${baseURL}/:id`, async (req, res) => await controller.update(req, res))

        this.router.delete(`${baseURL}/:id`, async (req, res) => await controller.destroy(req, res))

        this.router.get(`${baseURL}`, async (req, res) => await controller.index(req, res))

        this.router.get(`${baseURL}/:id`, async (req, res) => await controller.show(req, res))

        this.router.get(
            `${baseURL}-count`,
            async (req, res) => await countClientcontroller.index(req, res)
        )
    }
}
