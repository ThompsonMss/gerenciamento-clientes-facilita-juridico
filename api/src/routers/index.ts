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
        const baseURL = '/client'
        const controller = new ClientController()

        this.router.post(`${baseURL}`, (req, res) => controller.store(req, res))

        this.router.put(`${baseURL}/:id`, (req, res) => controller.update(req, res))

        this.router.delete(`${baseURL}/:id`, (req, res) => controller.destroy(req, res))

        this.router.get(`${baseURL}`, (req, res) => controller.index(req, res))

        this.router.get(`${baseURL}/:id`, (req, res) => controller.show(req, res))
    }
}
