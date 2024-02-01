import type { Request, Response } from 'express'
import { ClientValidator } from '../../../validators/ClientValidator'

export class ClientController {
    private readonly validator: ClientValidator

    constructor() {
        this.validator = new ClientValidator()
    }

    async store(req: Request, res: Response): Promise<Response<any>> {
        const errors = await this.validator.validateStore(req)

        if (errors !== false) {
            return res.status(400).json({ errors })
        }

        return res.status(201).json({ message: 'teste' })
    }

    async update(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }

    async destroy(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }

    async index(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }

    async show(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }
}
